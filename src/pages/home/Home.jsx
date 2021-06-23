import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLarge from "../../components/widgetLarge/WidgetLarge";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import {salesData} from "../../dummyData.js";
import "./home.css";

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={salesData} title="Sales data" grid dataKey="Total Sales"/>
            <div className="homeWidgets">
                <WidgetSmall/>
                <WidgetLarge/>
            </div>
        </div>
    )
}
