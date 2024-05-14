import { Nav } from "@/components/Layout/Components/Nav";
import "./Premium.css";

export const Premium = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <h2 className="main-title mb-7 font-bold dark:text-popover">
          Pricing Plans
        </h2>
        <div className="premium-plans dark:text-popover">
          <div className="box dark:border dark:border-white dark:border-solid">
            <h3>basic</h3>
            <div className="info">
              <span>$15</span>
              <span>per month</span>
            </div>
            <ul>
              <li>Access to basic features</li>
              <li>Unlimited tasks per day</li>
              <li>Email support</li>
              <li>Limited customization options</li>
              <li>Ads included</li>
            </ul>
            <button>choose plan</button>
          </div>
          <div className="box popular dark:border dark:border-white dark:border-solid">
            <div className="label">most popular</div>
            <h3>advanced</h3>
            <div className="info">
              <span>$25</span>
              <span>per month</span>
            </div>
            <ul>
              <li>Access to all features</li>
              <li>Unlimited tasks</li>
              <li>Email and chat support</li>
              <li>Full customization options</li>
              <li>No ads</li>
            </ul>
            <button>choose plan</button>
          </div>
          <div className="box dark:border dark:border-white dark:border-solid">
            <h3>professional</h3>
            <div className="info">
              <span>$45</span>
              <span>per month</span>
            </div>
            <ul>
              <li>Access to premium features</li>
              <li>Unlimited tasks</li>
              <li>Priority email and chat support</li>
              <li>Advanced customization options</li>
              <li>No ads</li>
            </ul>
            <button>choose plan</button>
          </div>
        </div>
      </div>
    </>
  );
};
