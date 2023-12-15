import React from "react";
import StuffOne from "./StuffOne";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import StuffTwo from "./StuffTwo";

export default function StuffHub() {
  const Items = [
    {
      id: 0,
      title: "Beauty steals under $25",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "See More",
    },
    {
      id: 1,
      title: "Shop holiday gift guide",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/GiftGuides/Fuji_Holiday_Gift_guide_Desktop_Card_1x_379x304_EN._SY304_CB576347904_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "Read More",
    },
    {
      id: 2,
      title: "Easy updates for elevated spaces",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "See More",
    },
    {
      id: 3,
      title: "Deals in PCs",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "Shop Home Products",
    },
    {
      id: 4,
      title: "Deals in PCs",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "Shop Home Products",
    },
    {
      id: 5,
      title: "Deals in PCs",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "Shop Home Products",
    },
    {
      id: 6,
      title: "Deals in PCs",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "Shop Home Products",
    },
    {
      id: 7,
      title: "Deals in PCs 2",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "Shop Home Products",
    },
    {
      id: 8,
      title: "Beauty steals under $250",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "See More",
    },
    {
      id: 9,
      title: "Shop holiday gift guide RN",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/GiftGuides/Fuji_Holiday_Gift_guide_Desktop_Card_1x_379x304_EN._SY304_CB576347904_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "Read More",
    },
    {
      id: 10,
      title: "Easy updates for elevated spaces ok",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "See More",
    },
    {
      id: 11,
      title: "Deals in PCs",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "Shop Home Products",
    },
    {
      id: 12,
      title: "Deals in PCs",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "Shop Home Products",
    },
    {
      id: 13,
      title: "Deals in PCs",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "Shop Home Products",
    },
    {
      id: 14,
      title: "Deals in PCs",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "Shop Home Products",
    },
    {
      id: 15,
      title: "Deals in PCs Last",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "Shop Home Products",
    },
  ];
  const Items2 = [
    {
      id: 0,
      imgUrl:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71SF1ciMhIL._AC_SY200_.jpg",
      hrLink:
        "https://www.amazon.com/Fridababy-NoseFrida-Aspirator-Hygiene-Filters/dp/B00RP0GHBO/?_encoding=UTF8&pd_rd_w=GAofJ&content-id=amzn1.sym.0f185419-5eda-46ce-8658-4e251c4fa1c4&pf_rd_p=0f185419-5eda-46ce-8658-4e251c4fa1c4&pf_rd_r=WMQ1CAEMA2TZ979QX93T&pd_rd_wg=Yaaf5&pd_rd_r=24030f50-8677-4b4e-887b-87efe7a8bcef&ref_=pd_gw_exports_top_sellers_unrec",
    },
    {
      id: 1,
      imgUrl:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/716OqzlKqzL._AC_SY200_.jpg",
      hrLink:
        "https://www.amazon.com/Fisher-Price-Soothe-Snuggle-Otter/dp/B07N1JP56L/?_encoding=UTF8&pd_rd_w=tYagx&content-id=amzn1.sym.0f185419-5eda-46ce-8658-4e251c4fa1c4&pf_rd_p=0f185419-5eda-46ce-8658-4e251c4fa1c4&pf_rd_r=MG252HZA9K2ETJTCPDGY&pd_rd_wg=OC4Fc&pd_rd_r=ee2a03da-9007-4187-aa0c-993458f0cdd5&ref_=pd_gw_exports_top_sellers_unrec",
    },
    {
      id: 2,
      imgUrl:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71wN-gcp+JL._AC_SY200_.jpg",
      hrLink:
        "https://www.amazon.com/FridaBaby-NoseFrida-Rechargeable-Aspirator-Different/dp/B094Z43BQF/?_encoding=UTF8&pd_rd_w=tYagx&content-id=amzn1.sym.0f185419-5eda-46ce-8658-4e251c4fa1c4&pf_rd_p=0f185419-5eda-46ce-8658-4e251c4fa1c4&pf_rd_r=MG252HZA9K2ETJTCPDGY&pd_rd_wg=OC4Fc&pd_rd_r=ee2a03da-9007-4187-aa0c-993458f0cdd5&ref_=pd_gw_exports_top_sellers_unrec",
    },
    {
      id: 3,
      imgUrl:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71SF1ciMhIL._AC_SY200_.jpg",
      hrLink:
        "https://www.amazon.com/Fridababy-NoseFrida-Aspirator-Hygiene-Filters/dp/B00RP0GHBO/?_encoding=UTF8&pd_rd_w=GAofJ&content-id=amzn1.sym.0f185419-5eda-46ce-8658-4e251c4fa1c4&pf_rd_p=0f185419-5eda-46ce-8658-4e251c4fa1c4&pf_rd_r=WMQ1CAEMA2TZ979QX93T&pd_rd_wg=Yaaf5&pd_rd_r=24030f50-8677-4b4e-887b-87efe7a8bcef&ref_=pd_gw_exports_top_sellers_unrec",
    },
    {
      id: 4,
      imgUrl:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/716OqzlKqzL._AC_SY200_.jpg",
      hrLink:
        "https://www.amazon.com/Fisher-Price-Soothe-Snuggle-Otter/dp/B07N1JP56L/?_encoding=UTF8&pd_rd_w=tYagx&content-id=amzn1.sym.0f185419-5eda-46ce-8658-4e251c4fa1c4&pf_rd_p=0f185419-5eda-46ce-8658-4e251c4fa1c4&pf_rd_r=MG252HZA9K2ETJTCPDGY&pd_rd_wg=OC4Fc&pd_rd_r=ee2a03da-9007-4187-aa0c-993458f0cdd5&ref_=pd_gw_exports_top_sellers_unrec",
    },
    {
      id: 5,
      imgUrl:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71wN-gcp+JL._AC_SY200_.jpg",
      hrLink:
        "https://www.amazon.com/FridaBaby-NoseFrida-Rechargeable-Aspirator-Different/dp/B094Z43BQF/?_encoding=UTF8&pd_rd_w=tYagx&content-id=amzn1.sym.0f185419-5eda-46ce-8658-4e251c4fa1c4&pf_rd_p=0f185419-5eda-46ce-8658-4e251c4fa1c4&pf_rd_r=MG252HZA9K2ETJTCPDGY&pd_rd_wg=OC4Fc&pd_rd_r=ee2a03da-9007-4187-aa0c-993458f0cdd5&ref_=pd_gw_exports_top_sellers_unrec",
    },
    {
      id: 6,
      imgUrl:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71SF1ciMhIL._AC_SY200_.jpg",
      hrLink:
        "https://www.amazon.com/Fridababy-NoseFrida-Aspirator-Hygiene-Filters/dp/B00RP0GHBO/?_encoding=UTF8&pd_rd_w=GAofJ&content-id=amzn1.sym.0f185419-5eda-46ce-8658-4e251c4fa1c4&pf_rd_p=0f185419-5eda-46ce-8658-4e251c4fa1c4&pf_rd_r=WMQ1CAEMA2TZ979QX93T&pd_rd_wg=Yaaf5&pd_rd_r=24030f50-8677-4b4e-887b-87efe7a8bcef&ref_=pd_gw_exports_top_sellers_unrec",
    },
    {
      id: 7,
      imgUrl:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/716OqzlKqzL._AC_SY200_.jpg",
      hrLink:
        "https://www.amazon.com/Fisher-Price-Soothe-Snuggle-Otter/dp/B07N1JP56L/?_encoding=UTF8&pd_rd_w=tYagx&content-id=amzn1.sym.0f185419-5eda-46ce-8658-4e251c4fa1c4&pf_rd_p=0f185419-5eda-46ce-8658-4e251c4fa1c4&pf_rd_r=MG252HZA9K2ETJTCPDGY&pd_rd_wg=OC4Fc&pd_rd_r=ee2a03da-9007-4187-aa0c-993458f0cdd5&ref_=pd_gw_exports_top_sellers_unrec",
    },
    {
      id: 8,
      imgUrl:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71wN-gcp+JL._AC_SY200_.jpg",
      hrLink:
        "https://www.amazon.com/FridaBaby-NoseFrida-Rechargeable-Aspirator-Different/dp/B094Z43BQF/?_encoding=UTF8&pd_rd_w=tYagx&content-id=amzn1.sym.0f185419-5eda-46ce-8658-4e251c4fa1c4&pf_rd_p=0f185419-5eda-46ce-8658-4e251c4fa1c4&pf_rd_r=MG252HZA9K2ETJTCPDGY&pd_rd_wg=OC4Fc&pd_rd_r=ee2a03da-9007-4187-aa0c-993458f0cdd5&ref_=pd_gw_exports_top_sellers_unrec",
    },
    
  ];
  const Items3 = [
    {
      id: 0,
      imgUrl:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71e2wPp93EL._AC_SY200_.jpg",
      hrLink:
        "https://www.amazon.com/Oppenheimer-Ultra-Blu-ray-Digital-UHD/dp/B0CL7JD41F/?_encoding=UTF8&pd_rd_w=hPJHq&content-id=amzn1.sym.41f1b87d-2e7a-4fe4-bfcc-e038cab8f79e&pf_rd_p=41f1b87d-2e7a-4fe4-bfcc-e038cab8f79e&pf_rd_r=S8ZMKYJXS259ERHTBZJA&pd_rd_wg=1Wn7m&pd_rd_r=066c8c73-d944-4ec1-a4ff-0e06e66514e6&ref_=pd_gw_crs_zg_bs_2625373011",
    },
    {
      id: 1,
      imgUrl:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71EiFp3q84L._AC_SY200_.jpg",
      hrLink:
        "https://www.amazon.com/Oppenheimer-Blu-ray-Digital-Cillian-Murphy/dp/B0CL7R395D/?_encoding=UTF8&pd_rd_w=hPJHq&content-id=amzn1.sym.41f1b87d-2e7a-4fe4-bfcc-e038cab8f79e&pf_rd_p=41f1b87d-2e7a-4fe4-bfcc-e038cab8f79e&pf_rd_r=S8ZMKYJXS259ERHTBZJA&pd_rd_wg=1Wn7m&pd_rd_r=066c8c73-d944-4ec1-a4ff-0e06e66514e6&ref_=pd_gw_crs_zg_bs_2625373011",
    },
    {
      id: 2,
      imgUrl:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81biiIq1mcL._AC_SY200_.jpg",
      hrLink:
        "https://www.amazon.com/Indiana-Jones-Dial-Destiny-UHD/dp/B0CKTMKKCZ/?_encoding=UTF8&pd_rd_w=hPJHq&content-id=amzn1.sym.41f1b87d-2e7a-4fe4-bfcc-e038cab8f79e&pf_rd_p=41f1b87d-2e7a-4fe4-bfcc-e038cab8f79e&pf_rd_r=S8ZMKYJXS259ERHTBZJA&pd_rd_wg=1Wn7m&pd_rd_r=066c8c73-d944-4ec1-a4ff-0e06e66514e6&ref_=pd_gw_crs_zg_bs_2625373011",
    },
    {
      id: 3,
      imgUrl:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81-xkYB2izL._AC_SY200_.jpg",
      hrLink:
        "https://www.amazon.com/Titanic-4K-UHD-Leonardo-DiCaprio/dp/B0CK3ZWT7X/?_encoding=UTF8&pd_rd_w=hPJHq&content-id=amzn1.sym.41f1b87d-2e7a-4fe4-bfcc-e038cab8f79e&pf_rd_p=41f1b87d-2e7a-4fe4-bfcc-e038cab8f79e&pf_rd_r=S8ZMKYJXS259ERHTBZJA&pd_rd_wg=1Wn7m&pd_rd_r=066c8c73-d944-4ec1-a4ff-0e06e66514e6&ref_=pd_gw_crs_zg_bs_2625373011",
    },
    {
      id: 4,
      imgUrl:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71e2wPp93EL._AC_SY200_.jpg",
      hrLink:
        "https://www.amazon.com/Oppenheimer-Ultra-Blu-ray-Digital-UHD/dp/B0CL7JD41F/?_encoding=UTF8&pd_rd_w=hPJHq&content-id=amzn1.sym.41f1b87d-2e7a-4fe4-bfcc-e038cab8f79e&pf_rd_p=41f1b87d-2e7a-4fe4-bfcc-e038cab8f79e&pf_rd_r=S8ZMKYJXS259ERHTBZJA&pd_rd_wg=1Wn7m&pd_rd_r=066c8c73-d944-4ec1-a4ff-0e06e66514e6&ref_=pd_gw_crs_zg_bs_2625373011",
    },
    {
      id: 5,
      imgUrl:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71EiFp3q84L._AC_SY200_.jpg",
      hrLink:
        "https://www.amazon.com/Oppenheimer-Blu-ray-Digital-Cillian-Murphy/dp/B0CL7R395D/?_encoding=UTF8&pd_rd_w=hPJHq&content-id=amzn1.sym.41f1b87d-2e7a-4fe4-bfcc-e038cab8f79e&pf_rd_p=41f1b87d-2e7a-4fe4-bfcc-e038cab8f79e&pf_rd_r=S8ZMKYJXS259ERHTBZJA&pd_rd_wg=1Wn7m&pd_rd_r=066c8c73-d944-4ec1-a4ff-0e06e66514e6&ref_=pd_gw_crs_zg_bs_2625373011",
    },
    {
      id: 6,
      imgUrl:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81biiIq1mcL._AC_SY200_.jpg",
      hrLink:
        "https://www.amazon.com/Indiana-Jones-Dial-Destiny-UHD/dp/B0CKTMKKCZ/?_encoding=UTF8&pd_rd_w=hPJHq&content-id=amzn1.sym.41f1b87d-2e7a-4fe4-bfcc-e038cab8f79e&pf_rd_p=41f1b87d-2e7a-4fe4-bfcc-e038cab8f79e&pf_rd_r=S8ZMKYJXS259ERHTBZJA&pd_rd_wg=1Wn7m&pd_rd_r=066c8c73-d944-4ec1-a4ff-0e06e66514e6&ref_=pd_gw_crs_zg_bs_2625373011",
    },
    {
      id: 7,
      imgUrl:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81-xkYB2izL._AC_SY200_.jpg",
      hrLink:
        "https://www.amazon.com/Titanic-4K-UHD-Leonardo-DiCaprio/dp/B0CK3ZWT7X/?_encoding=UTF8&pd_rd_w=hPJHq&content-id=amzn1.sym.41f1b87d-2e7a-4fe4-bfcc-e038cab8f79e&pf_rd_p=41f1b87d-2e7a-4fe4-bfcc-e038cab8f79e&pf_rd_r=S8ZMKYJXS259ERHTBZJA&pd_rd_wg=1Wn7m&pd_rd_r=066c8c73-d944-4ec1-a4ff-0e06e66514e6&ref_=pd_gw_crs_zg_bs_2625373011",
    },
    {
      id: 8,
      imgUrl:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81tfKiNfztL._AC_SY200_.jpg",
      hrLink:
        "https://www.amazon.com/Titanic-4K-UHD-Leonardo-DiCaprio/dp/B0CK3ZWT7X/?_encoding=UTF8&pd_rd_w=hPJHq&content-id=amzn1.sym.41f1b87d-2e7a-4fe4-bfcc-e038cab8f79e&pf_rd_p=41f1b87d-2e7a-4fe4-bfcc-e038cab8f79e&pf_rd_r=S8ZMKYJXS259ERHTBZJA&pd_rd_wg=1Wn7m&pd_rd_r=066c8c73-d944-4ec1-a4ff-0e06e66514e6&ref_=pd_gw_crs_zg_bs_2625373011",
    },
    
  ];
  return (
    <>
      <div
        style={{ zIndex: "2" }}
        className="absolute w-full h-fit top-40 bg-transparent"
      >
        <div
          style={{ width: "97%" }}
          className="h-fit m-auto grid grid-cols-4 grid-rows-2 gap-y-6 gap-x-5"
        >
          {Items.slice(0, 8).map((Item) => (
            <StuffOne
              key={Item.id}
              title={Item.title}
              img={Item.imgUrl}
              hrLink={Item.hrLink}
              hrTitle={Item.hrTitle}
            />
          ))}
        </div>
        <div style={{ width: "97%" }} className="m-auto mt-5">
          <div className="relative h-fit bg-white p-5">
            <div className="absolute top-28 left-3 shadow-lg w-11  h-24 bg-white">
              <a
                href="#"
                className="border h-full w-full flex items-center justify-center"
              >
                <span>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </span>
              </a>
            </div>
            <div className="absolute top-28 right-3 shadow-lg w-11  h-24 bg-white">
              <a
                href="#"
                className="border h-full w-full flex items-center justify-center"
              >
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </a>
            </div>
            <b className="text-xl">Top Sellers in Baby Products for you</b>
            <div className="h-72 overflow-x-scroll overflow-y-hidden">
              <div className="grid grid-flow-col gap-x-3  h-full">
                {Items2.map((Item) => (
                  <StuffTwo
                    key={Item.id}
                    Img={Item.imgUrl}
                    Link={Item.hrLink}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "97%" }} className="m-auto mt-5">
          <div className="relative h-fit bg-white p-5">
            <div className="absolute top-28 left-3 shadow-lg w-11  h-24 bg-white">
              <a
                href="#"
                className="border h-full w-full flex items-center justify-center"
              >
                <span>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </span>
              </a>
            </div>
            <div className="absolute top-28 right-3 shadow-lg w-11  h-24 bg-white">
              <a
                href="#"
                className="border h-full w-full flex items-center justify-center"
              >
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </a>
            </div>
            <b className="text-xl">Most wished for in Movies & TV</b>
            <div className="h-72 overflow-x-scroll overflow-y-hidden">
              <div className="grid grid-flow-col gap-x-3  h-full">
                {Items3.map((Item) => (
                  <StuffTwo
                    key={Item.id}
                    Img={Item.imgUrl}
                    Link={Item.hrLink}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
