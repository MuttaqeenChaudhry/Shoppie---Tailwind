import React from "react";
import StuffOne from "./StuffOne";
import exampleimg from "../assets/Images/P1.jpg";

export default function StuffHub() {
  const Items = [
    {
      id: "0",
      title: "Beauty steals under $25",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "See More",
    },
    {
      id: "1",
      title: "Shop holiday gift guide",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/GiftGuides/Fuji_Holiday_Gift_guide_Desktop_Card_1x_379x304_EN._SY304_CB576347904_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "Read More",
    },
    {
      id: "2",
      title: "Easy updates for elevated spaces",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "See More",
    },
    {
      id: "3",
      title: "Deals in PCs",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "Shop Home Products",
    },
    ,
    {
      id: "4",
      title: "Deals in PCs",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "Shop Home Products",
    },
    ,
    {
      id: "5",
      title: "Deals in PCs",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "Shop Home Products",
    },
    ,
    {
      id: "6",
      title: "Deals in PCs",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "Shop Home Products",
    },
    ,
    {
      id: "7",
      title: "Deals in PCs",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "Shop Home Products",
    },
    {
      id: "8",
      title: "Beauty steals under $25",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "See More",
    },
    {
      id: "9",
      title: "Shop holiday gift guide",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/GiftGuides/Fuji_Holiday_Gift_guide_Desktop_Card_1x_379x304_EN._SY304_CB576347904_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "Read More",
    },
    {
      id: "10",
      title: "Easy updates for elevated spaces",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "See More",
    },
    {
      id: "11",
      title: "Deals in PCs",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "Shop Home Products",
    },
    ,
    {
      id: "12",
      title: "Deals in PCs",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "Shop Home Products",
    },
    ,
    {
      id: "13",
      title: "Deals in PCs",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "Shop Home Products",
    },
    ,
    {
      id: "14",
      title: "Deals in PCs",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "Shop Home Products",
    },
    ,
    {
      id: "15",
      title: "Deals in PCs",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg",
      hrLink:
        "https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=b1093ff4-3280-4b14-a186-4d3ad1bfc3ee&pd_rd_w=JJWxk&pd_rd_wg=UUsHN&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=QF2HW90721H6H05QRJNR&ref=pd_gw_unk",
      hrTitle: "Shop Home Products",
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
          {Items.map((Item) => (
            <StuffOne
              key={Item.id}
              title={Item.title}
              img={Item.imgUrl}
              hrLink={Item.hrLink}
              hrTitle={Item.hrTitle}
            />
          ))}
        </div>
      </div>
    </>
  );
}
