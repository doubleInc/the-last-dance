/* A script that scrapes a site for addresses of recycling locations Australiawide.
  https://recyclingnearyou.com.au/ewastescheme/
*/
const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const { getCoordinates } = require("./Ajaxcalls");
const fs = require("fs");
const firebase = require("./firebase");

//iife to run script
(async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    //enter page to scrape
    await page.goto("https://recyclingnearyou.com.au/ewastescheme", {
      waitUntil: "networkidle0",
    });
    await page.waitForSelector(".content", { timeout: 1000 });

    const body = await page.content();

    await browser.close();

    const root = cheerio.load(body);

    // use cheerio to get addresses and business names
    const locationsArr = root(".business-search-location-inner .col-md-9")
      .contents()
      .text()
      .trim()
      .replace(/  /g, "")
      .replace(/\n/g, ".")
      .replace(/\.\.\.\./g, ".")
      .split(".");

    //create pairs from each bussiness name and address ["officeworks", "1 ham road, Altona North"]
    const locationPairs = locationsArr.reduce(function (
      result,
      value,
      index,
      array
    ) {
      if (index % 2 === 0) result.push(array.slice(index, index + 2));
      return result;
    },
    []);

    // temp array to process objects to be added to db
    //const tempArr = locationPairs.slice(299, 468);

    // create object from each entry to be added to db
    const locationObj = await Promise.all(
      // use either temp array above or all entries(locationPairs)
      locationPairs.map(async ([name, address]) => ({
        name,
        address,
        type: "technology",
        coords: await getCoordinates(address),
      }))
    );

    // add each to firebase via push
    locationObj.forEach(async (val) => {
      await firebase.database().ref("/").push(val);
    });

    // uncomment below to write to file, need to use JSON.stringify
    // await fs.writeFile("./dataWithCoords.js", locationObj, (err) => {
    //   if (err) throw err;
    //   console.log("Data written to file");
    // });

    // Stream implementation to write to file
    // var file = fs.createWriteStream("array.txt");
    // file.on("error", function (err) {
    //   /* error handling */
    //   console.log(err);
    // });
    // locationObj.forEach(function (v) {
    //   file.write(JSON.stringify(v) + ",");
    // });
    // file.end();

    console.log("Done. Safe to exit process.");
  } catch (error) {
    console.log(error);
  }
})();
