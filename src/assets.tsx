import img_url_1 from "./assets/img1.jpg";
import img_url_2 from "./assets/logo-removebg-preview.png";
import img_url_3 from "./assets/img3.jpg";
import img_url_4 from "./assets/img4.jpg";

import { asset_registry } from "./asset-registry";
console.log("Registering assets...");

asset_registry.__registerAssetPath("asset://images/1",img_url_1);
asset_registry.__registerAssetPath("asset://images/2",img_url_2);
asset_registry.__registerAssetPath("asset://images/3",img_url_3);
asset_registry.__registerAssetPath("asset://images/4",img_url_4);

export default asset_registry;