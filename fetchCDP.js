async function checkApi() {
  try {
    const res = await fetch("https://data.cdp.net/api/id/3d2f-dcbt.json?$where=country_area='Brazil'");
    console.log(res.status);
    const data = await res.json();
    console.log(`Found ${data.length} projects in Brazil`);
    if (data.length > 0) console.log(JSON.stringify(data[0], null, 2));
  } catch (e) {
    console.error(e);
  }
}
checkApi();
