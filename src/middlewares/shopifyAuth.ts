const nonce = require("nonce") ;    

// Information
const apiKey = process.env.SHOPIFY_API_KEY;
const scopes = process.env.SHOPIFY_SCOPES;
const forwardingAddress = process.env.SHOPIFY_FORWARDING_ADDRESS;

const verify = (req: any, res: any) => {
    const shopName = req.query.shop;
    if (shopName) {
      // Create a nonce
      const shopState = nonce();

      // shopify callback redirect
      const redirectURL = forwardingAddress + "/shopify/dashboard";
  
      // install url for app install
      const installUrl =
        "https://" +
        shopName +
        "/admin/oauth/authorize?client_id=" +
        apiKey +
        "&scope=" +
        scopes +
        "&state=" +
        shopState +
        "&redirect_uri=" +
        redirectURL;

      res.cookie("state", shopState);
      res.redirect(installUrl);
    } else {
      return res.status(400).send('Missing "Shop Name" parameter!!');
    }
}

export { verify };