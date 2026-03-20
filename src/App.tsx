import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import BankingServices from "./pages/BankingServices";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServicesHub from "./pages/ServicesHub";
import TestingHub from "./pages/TestingHub";
import DynamicPage from "./pages/DynamicPage";
import SoftwareTesting from "./pages/SoftwareTesting";
import UserTraining from "./pages/UserTraining";
import DevTeamSupport from "./pages/DevTeamSupport";
import DomainSupport from "./pages/DomainSupport";
import IslamicBankingTesting from "./pages/IslamicBankingTesting";
import BespokeAppsTesting from "./pages/BespokeAppsTesting";
import TreasuryTesting from "./pages/TreasuryTesting";
import RetailLoanTesting from "./pages/RetailLoanTesting";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Sitemap from "./pages/Sitemap";
import CorporateBanking from "./pages/CorporateBanking";
import InvestmentBanking from "./pages/InvestmentBanking";
import CapitalMarkets from "./pages/CapitalMarkets";
import InsuranceTesting from "./pages/InsuranceTesting";
import CoreBanking from "./pages/CoreBanking";
import DataWarehouse from "./pages/DataWarehouse";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Services Section */}
          <Route path="/services" element={<ServicesHub />} />
          <Route path="/services/software-testing" element={<SoftwareTesting />} />
          <Route path="/services/support-users" element={<UserTraining />} />
          <Route path="/services/support-dev-teams" element={<DevTeamSupport />} />
          <Route path="/services/domain-support" element={<DomainSupport />} />
          <Route path="/services/:subpage" element={<DynamicPage category="services" />} />
          
          {/* Testing Areas Hub */}
          <Route path="/testing" element={<TestingHub />} />
          <Route path="/testing/retail-banking" element={<BankingServices />} />
          <Route path="/testing/islamic-banking" element={<IslamicBankingTesting />} />
          <Route path="/testing/bespoke-apps" element={<BespokeAppsTesting />} />
          <Route path="/testing/treasury" element={<TreasuryTesting />} />
          <Route path="/testing/retail-loans" element={<RetailLoanTesting />} />
          <Route path="/testing/corporate-banking" element={<CorporateBanking />} />
          <Route path="/testing/investment-banking" element={<InvestmentBanking />} />
          <Route path="/testing/capital-markets" element={<CapitalMarkets />} />
          <Route path="/testing/insurance" element={<InsuranceTesting />} />
          <Route path="/testing/core-banking" element={<CoreBanking />} />
          <Route path="/testing/data-warehouse" element={<DataWarehouse />} />
          <Route path="/testing/:subpage" element={<DynamicPage category="testing" />} />
          
          {/* Legal & Utility */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/sitemap.xml" element={<Sitemap />} />
          
          {/* 404 Page */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

