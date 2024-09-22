import logo from "./mesoestetic-logo.png";
import { ReactComponent as Pdf } from "./pdf.svg";

import portfolio from "./pdfs/KFCGGG0029_catalogo_corporativo_EN bp.pdf";
import blemiderm from "./pdfs/KFDABL0020_CATALOGUE_BLEMIDERM_EN_baja.pdf";
import gynecoeasthetic from "./pdfs/KFMFIL0061 CATÁLOGO GINECOESTETICA-EN_baja.pdf";
import mesofiller from "./pdfs/KFMFIL0088_CATALOGUE_MESOFILLER_EN_baja.pdf";
import mesohyal from "./pdfs/KFMHYA0129_catalogue_mesohyal_EN_bp.pdf";
import mesopeelMD from "./pdfs/KFMPEL0030_catalogue_mesopeel_MED_EN baja.pdf";
import dermamelan from "./pdfs/KFMPIG0012_catalogo_dermamelan_EN_pliegos (1).pdf";
import mesoprof from "./pdfs/KFPACC0002 catalogo mesoprof_EN.pdf";
import cosmelan from "./pdfs/KFPPIG0038_catalogo_guia_cosmelan_EN baja.pdf";
import ageElement from "./pdfs/KFDABL0013_LEAFLET_CONSUMIDOR_AGE_ELEMENT_EN_bp.pdf";
import aoxFerulicSkinRetin from "./pdfs/KFDGLA0010_CATALOGUE_GLOBAL ANTIAGING_EN.pdf";
import tricology from "./pdfs/KFDHAI0003_catalogue tricology_EN.pdf";
import cleansing from "./pdfs/KFDHIG0002_catalogue_cleansing_solutions_EN_baja.pdf";
import moisturing from "./pdfs/KFDMOI0001_catalogue_moisturising_EN_baja.pdf";
import sensitive from "./pdfs/KFDSEN0003_catalogue_sensitive_solutions_EN_bp.pdf";
import mesoprotech from "./pdfs/KFDSUN0062 catalogo mesoprotech_EN.pdf";
import mct from "./pdfs/294084_1506_guia mct_EN_baja.pdf";
import genesis from "./pdfs/KFEGEN0059_catalogue_genesis_EN_AF.pdf";
import mPenPro from "./pdfs/KFEPEN0003_catalogue_guia_mpen_pro_EN.pdf";

const FileItem = ({ children, link }) => (
  <a
    href={link}
    className="pl-10 h-20 capitalize flex items-center text-xl font-bold"
  >
    <Pdf height={50} width={50} className="mr-5" />
    {children}
  </a>
);

const App = () => {
  return (
    <div className="text-center">
      <img
        className="mx-auto border-b border-gray-300 w-full px-20"
        src={logo}
        alt="logo"
      />
      <div className="text-4xl border-b border-gray-300 py-10 font-bold">
        DOWNLOAD CENTER
      </div>

      <FileItem link={portfolio}>portfolio</FileItem>
      <FileItem link={blemiderm}>blemiderm</FileItem>
      <FileItem link={gynecoeasthetic}>gynecoeasthetic</FileItem>
      <FileItem link={mesofiller}>mesofiller</FileItem>
      <FileItem link={mesohyal}>mesohyal</FileItem>
      <FileItem link={mesopeelMD}>mesopeel MD</FileItem>
      <FileItem link={dermamelan}>dermamelan</FileItem>
      <FileItem link={mesoprof}>mesoprof</FileItem>
      <FileItem link={cosmelan}>cosmelan</FileItem>
      <FileItem link={ageElement}>age element</FileItem>
      <FileItem link={aoxFerulicSkinRetin}>aox ferulic, skin retin</FileItem>
      <FileItem link={tricology}>tricology</FileItem>
      <FileItem link={cleansing}>cleansing</FileItem>
      <FileItem link={moisturing}>moisturing</FileItem>
      <FileItem link={sensitive}>sensitive</FileItem>
      <FileItem link={mesoprotech}>mesoprotech</FileItem>
      <FileItem link={mct}>mct</FileItem>
      <FileItem link={genesis}>genesis</FileItem>
      <FileItem link={mPenPro}>m.pen pro</FileItem>
    </div>
  );
};

export default App;
