import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Rp20.000K</span>
                    <span className="featuredMoneyRate">-11.5 <ArrowDownward className="featuredIcon negative"/> </span>
                </div>
                <span className="featureSub">Compare to last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Rp10.000K</span>
                    <span className="featuredMoneyRate">-1.5 <ArrowDownward className="featuredIcon negative"/> </span>
                </div>
                <span className="featureSub">Compare to last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Rp30.000K</span>
                    <span className="featuredMoneyRate">+20.5 <ArrowUpward className="featuredIcon"/> </span>
                </div>
                <span className="featureSub">Compare to last Month</span>
            </div>
        </div>
    )
}
