import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./audio1.module.css";

type Audio1Type = {
  /** Style props */
  audioWidth?: CSSProperties["width"];
  audioHeight?: CSSProperties["height"];
  rectangleDivBorderRadius?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius1?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius2?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius3?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius4?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius5?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius6?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius7?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius8?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius9?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius10?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius11?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius12?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius13?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius14?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius15?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius16?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius17?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius18?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius19?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius20?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius21?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius22?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius23?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius24?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius25?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius26?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius27?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius28?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius29?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius30?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius31?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius32?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius33?: CSSProperties["borderRadius"];
  rectangleDivRight?: CSSProperties["right"];
  rectangleDivBorderRadius34?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius35?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius36?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius37?: CSSProperties["borderRadius"];
  rectangleDivLeft?: CSSProperties["left"];
  rectangleDivBorderRadius38?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius39?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius40?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius41?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius42?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius43?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius44?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius45?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius46?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius47?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius48?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius49?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius50?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius51?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius52?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius53?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius54?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius55?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius56?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius57?: CSSProperties["borderRadius"];
  rectangleDivLeft1?: CSSProperties["left"];
  rectangleDivBorderRadius58?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius59?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius60?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius61?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius62?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius63?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius64?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius65?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius66?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius67?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius68?: CSSProperties["borderRadius"];
  rectangleDivLeft2?: CSSProperties["left"];
  rectangleDivBorderRadius69?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius70?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius71?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius72?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius73?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius74?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius75?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius76?: CSSProperties["borderRadius"];
  rectangleDivRight1?: CSSProperties["right"];
  rectangleDivBorderRadius77?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius78?: CSSProperties["borderRadius"];
  rectangleDivLeft3?: CSSProperties["left"];
  rectangleDivBorderRadius79?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius80?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius81?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius82?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius83?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius84?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius85?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius86?: CSSProperties["borderRadius"];
  rectangleDivRight2?: CSSProperties["right"];
  rectangleDivBorderRadius87?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius88?: CSSProperties["borderRadius"];
  rectangleDivLeft4?: CSSProperties["left"];
  rectangleDivBorderRadius89?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius90?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius91?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius92?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius93?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius94?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius95?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius96?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius97?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius98?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius99?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius100?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius101?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius102?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius103?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius104?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius105?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius106?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius107?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius108?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius109?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius110?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius111?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius112?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius113?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius114?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius115?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius116?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius117?: CSSProperties["borderRadius"];
  rectangleDivLeft5?: CSSProperties["left"];
  rectangleDivBorderRadius118?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius119?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius120?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius121?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius122?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius123?: CSSProperties["borderRadius"];
  rectangleDivRight3?: CSSProperties["right"];
  rectangleDivBorderRadius124?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius125?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius126?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius127?: CSSProperties["borderRadius"];
  rectangleDivLeft6?: CSSProperties["left"];
  rectangleDivBorderRadius128?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius129?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius130?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius131?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius132?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius133?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius134?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius135?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius136?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius137?: CSSProperties["borderRadius"];
  rectangleDivLeft7?: CSSProperties["left"];
  rectangleDivBorderRadius138?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius139?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius140?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius141?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius142?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius143?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius144?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius145?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius146?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius147?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius148?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius149?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius150?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius151?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius152?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius153?: CSSProperties["borderRadius"];
  rectangleDivRight4?: CSSProperties["right"];
  rectangleDivBorderRadius154?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius155?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius156?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius157?: CSSProperties["borderRadius"];
  rectangleDivLeft8?: CSSProperties["left"];
  rectangleDivBorderRadius158?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius159?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius160?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius161?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius162?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius163?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius164?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius165?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius166?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius167?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius168?: CSSProperties["borderRadius"];
  rectangleDivLeft9?: CSSProperties["left"];
  rectangleDivBorderRadius169?: CSSProperties["borderRadius"];
  audioPosition?: CSSProperties["position"];
  divPosition?: CSSProperties["position"];
  divHeight?: CSSProperties["height"];
  divWidth?: CSSProperties["width"];
  divTop?: CSSProperties["top"];
  divRight?: CSSProperties["right"];
  divBottom?: CSSProperties["bottom"];
  divLeft?: CSSProperties["left"];
  rectangleDivHeight?: CSSProperties["height"];
  rectangleDivTop?: CSSProperties["top"];
  rectangleDivBottom?: CSSProperties["bottom"];
  rectangleDivBackground?: CSSProperties["background"];
  rectangleDivHeight1?: CSSProperties["height"];
  rectangleDivTop1?: CSSProperties["top"];
  rectangleDivBottom1?: CSSProperties["bottom"];
  rectangleDivBackground1?: CSSProperties["background"];
  rectangleDivHeight2?: CSSProperties["height"];
  rectangleDivTop2?: CSSProperties["top"];
  rectangleDivBottom2?: CSSProperties["bottom"];
  rectangleDivBackground2?: CSSProperties["background"];
  rectangleDivHeight3?: CSSProperties["height"];
  rectangleDivTop3?: CSSProperties["top"];
  rectangleDivBottom3?: CSSProperties["bottom"];
  rectangleDivBackground3?: CSSProperties["background"];
  rectangleDivHeight4?: CSSProperties["height"];
  rectangleDivTop4?: CSSProperties["top"];
  rectangleDivBottom4?: CSSProperties["bottom"];
  rectangleDivBackground4?: CSSProperties["background"];
  rectangleDivHeight5?: CSSProperties["height"];
  rectangleDivTop5?: CSSProperties["top"];
  rectangleDivBottom5?: CSSProperties["bottom"];
  rectangleDivBackground5?: CSSProperties["background"];
  rectangleDivHeight6?: CSSProperties["height"];
  rectangleDivTop6?: CSSProperties["top"];
  rectangleDivBottom6?: CSSProperties["bottom"];
  rectangleDivBackground6?: CSSProperties["background"];
  rectangleDivHeight7?: CSSProperties["height"];
  rectangleDivTop7?: CSSProperties["top"];
  rectangleDivBottom7?: CSSProperties["bottom"];
  rectangleDivBackground7?: CSSProperties["background"];
  rectangleDivBackground8?: CSSProperties["background"];
  rectangleDivBackground9?: CSSProperties["background"];
  rectangleDivHeight8?: CSSProperties["height"];
  rectangleDivTop8?: CSSProperties["top"];
  rectangleDivBottom8?: CSSProperties["bottom"];
  rectangleDivBackground10?: CSSProperties["background"];
  rectangleDivHeight9?: CSSProperties["height"];
  rectangleDivTop9?: CSSProperties["top"];
  rectangleDivBottom9?: CSSProperties["bottom"];
  rectangleDivBackground11?: CSSProperties["background"];
  rectangleDivHeight10?: CSSProperties["height"];
  rectangleDivTop10?: CSSProperties["top"];
  rectangleDivBottom10?: CSSProperties["bottom"];
  rectangleDivBackground12?: CSSProperties["background"];
  rectangleDivHeight11?: CSSProperties["height"];
  rectangleDivTop11?: CSSProperties["top"];
  rectangleDivBottom11?: CSSProperties["bottom"];
  rectangleDivBackground13?: CSSProperties["background"];
  rectangleDivHeight12?: CSSProperties["height"];
  rectangleDivTop12?: CSSProperties["top"];
  rectangleDivBottom12?: CSSProperties["bottom"];
  rectangleDivBackground14?: CSSProperties["background"];
  rectangleDivHeight13?: CSSProperties["height"];
  rectangleDivTop13?: CSSProperties["top"];
  rectangleDivBottom13?: CSSProperties["bottom"];
  rectangleDivBackground15?: CSSProperties["background"];
  rectangleDivHeight14?: CSSProperties["height"];
  rectangleDivTop14?: CSSProperties["top"];
  rectangleDivBottom14?: CSSProperties["bottom"];
  rectangleDivBackground16?: CSSProperties["background"];
  rectangleDivHeight15?: CSSProperties["height"];
  rectangleDivTop15?: CSSProperties["top"];
  rectangleDivBottom15?: CSSProperties["bottom"];
  rectangleDivBackground17?: CSSProperties["background"];
  rectangleDivBackground18?: CSSProperties["background"];
  rectangleDivBackground19?: CSSProperties["background"];
  rectangleDivHeight16?: CSSProperties["height"];
  rectangleDivTop16?: CSSProperties["top"];
  rectangleDivBottom16?: CSSProperties["bottom"];
  rectangleDivBackground20?: CSSProperties["background"];
  rectangleDivHeight17?: CSSProperties["height"];
  rectangleDivTop17?: CSSProperties["top"];
  rectangleDivBottom17?: CSSProperties["bottom"];
  rectangleDivBackground21?: CSSProperties["background"];
  rectangleDivHeight18?: CSSProperties["height"];
  rectangleDivTop18?: CSSProperties["top"];
  rectangleDivBottom18?: CSSProperties["bottom"];
  rectangleDivBackground22?: CSSProperties["background"];
  rectangleDivHeight19?: CSSProperties["height"];
  rectangleDivTop19?: CSSProperties["top"];
  rectangleDivBottom19?: CSSProperties["bottom"];
  rectangleDivBackground23?: CSSProperties["background"];
  rectangleDivHeight20?: CSSProperties["height"];
  rectangleDivTop20?: CSSProperties["top"];
  rectangleDivBottom20?: CSSProperties["bottom"];
  rectangleDivBackground24?: CSSProperties["background"];
  rectangleDivHeight21?: CSSProperties["height"];
  rectangleDivTop21?: CSSProperties["top"];
  rectangleDivBottom21?: CSSProperties["bottom"];
  rectangleDivBackground25?: CSSProperties["background"];
  rectangleDivHeight22?: CSSProperties["height"];
  rectangleDivTop22?: CSSProperties["top"];
  rectangleDivBottom22?: CSSProperties["bottom"];
  rectangleDivBackground26?: CSSProperties["background"];
  rectangleDivHeight23?: CSSProperties["height"];
  rectangleDivTop23?: CSSProperties["top"];
  rectangleDivBottom23?: CSSProperties["bottom"];
  rectangleDivBackground27?: CSSProperties["background"];
  rectangleDivBackground28?: CSSProperties["background"];
  rectangleDivBackground29?: CSSProperties["background"];
  rectangleDivBackground30?: CSSProperties["background"];
  rectangleDivBackground31?: CSSProperties["background"];
  rectangleDivBackground32?: CSSProperties["background"];
  rectangleDivBackground33?: CSSProperties["background"];
  rectangleDivBackground34?: CSSProperties["background"];
  rectangleDivBackground35?: CSSProperties["background"];
  rectangleDivBackground36?: CSSProperties["background"];
  rectangleDivBackground37?: CSSProperties["background"];
  rectangleDivBackground38?: CSSProperties["background"];
  rectangleDivBackground39?: CSSProperties["background"];
  rectangleDivBackground40?: CSSProperties["background"];
  rectangleDivBackground41?: CSSProperties["background"];
  rectangleDivBackground42?: CSSProperties["background"];
  rectangleDivBackground43?: CSSProperties["background"];
  rectangleDivBackground44?: CSSProperties["background"];
  rectangleDivBackground45?: CSSProperties["background"];
  rectangleDivBackground46?: CSSProperties["background"];
  rectangleDivBackground47?: CSSProperties["background"];
  rectangleDivBackground48?: CSSProperties["background"];
  rectangleDivBackground49?: CSSProperties["background"];
  rectangleDivBackground50?: CSSProperties["background"];
  rectangleDivBackground51?: CSSProperties["background"];
  rectangleDivBackground52?: CSSProperties["background"];
  rectangleDivBackground53?: CSSProperties["background"];
  rectangleDivBackground54?: CSSProperties["background"];
  rectangleDivBackground55?: CSSProperties["background"];
  rectangleDivBackground56?: CSSProperties["background"];
  rectangleDivBackground57?: CSSProperties["background"];
  rectangleDivBackground58?: CSSProperties["background"];
  rectangleDivBackground59?: CSSProperties["background"];
  rectangleDivHeight24?: CSSProperties["height"];
  rectangleDivTop24?: CSSProperties["top"];
  rectangleDivBottom24?: CSSProperties["bottom"];
  rectangleDivBackground60?: CSSProperties["background"];
  rectangleDivHeight25?: CSSProperties["height"];
  rectangleDivTop25?: CSSProperties["top"];
  rectangleDivBottom25?: CSSProperties["bottom"];
  rectangleDivBackground61?: CSSProperties["background"];
  rectangleDivHeight26?: CSSProperties["height"];
  rectangleDivTop26?: CSSProperties["top"];
  rectangleDivBottom26?: CSSProperties["bottom"];
  rectangleDivBackground62?: CSSProperties["background"];
  rectangleDivHeight27?: CSSProperties["height"];
  rectangleDivTop27?: CSSProperties["top"];
  rectangleDivBottom27?: CSSProperties["bottom"];
  rectangleDivBackground63?: CSSProperties["background"];
  rectangleDivHeight28?: CSSProperties["height"];
  rectangleDivTop28?: CSSProperties["top"];
  rectangleDivBottom28?: CSSProperties["bottom"];
  rectangleDivBackground64?: CSSProperties["background"];
  rectangleDivHeight29?: CSSProperties["height"];
  rectangleDivTop29?: CSSProperties["top"];
  rectangleDivBottom29?: CSSProperties["bottom"];
  rectangleDivBackground65?: CSSProperties["background"];
  rectangleDivHeight30?: CSSProperties["height"];
  rectangleDivTop30?: CSSProperties["top"];
  rectangleDivBottom30?: CSSProperties["bottom"];
  rectangleDivBackground66?: CSSProperties["background"];
  rectangleDivHeight31?: CSSProperties["height"];
  rectangleDivTop31?: CSSProperties["top"];
  rectangleDivBottom31?: CSSProperties["bottom"];
  rectangleDivBackground67?: CSSProperties["background"];
  rectangleDivBackground68?: CSSProperties["background"];
  rectangleDivBackground69?: CSSProperties["background"];
  rectangleDivHeight32?: CSSProperties["height"];
  rectangleDivTop32?: CSSProperties["top"];
  rectangleDivBottom32?: CSSProperties["bottom"];
  rectangleDivBackground70?: CSSProperties["background"];
  rectangleDivHeight33?: CSSProperties["height"];
  rectangleDivTop33?: CSSProperties["top"];
  rectangleDivBottom33?: CSSProperties["bottom"];
  rectangleDivBackground71?: CSSProperties["background"];
  rectangleDivHeight34?: CSSProperties["height"];
  rectangleDivTop34?: CSSProperties["top"];
  rectangleDivBottom34?: CSSProperties["bottom"];
  rectangleDivBackground72?: CSSProperties["background"];
  rectangleDivHeight35?: CSSProperties["height"];
  rectangleDivTop35?: CSSProperties["top"];
  rectangleDivBottom35?: CSSProperties["bottom"];
  rectangleDivBackground73?: CSSProperties["background"];
  rectangleDivHeight36?: CSSProperties["height"];
  rectangleDivTop36?: CSSProperties["top"];
  rectangleDivBottom36?: CSSProperties["bottom"];
  rectangleDivBackground74?: CSSProperties["background"];
  rectangleDivHeight37?: CSSProperties["height"];
  rectangleDivTop37?: CSSProperties["top"];
  rectangleDivBottom37?: CSSProperties["bottom"];
  rectangleDivBackground75?: CSSProperties["background"];
  rectangleDivHeight38?: CSSProperties["height"];
  rectangleDivTop38?: CSSProperties["top"];
  rectangleDivBottom38?: CSSProperties["bottom"];
  rectangleDivBackground76?: CSSProperties["background"];
  rectangleDivHeight39?: CSSProperties["height"];
  rectangleDivTop39?: CSSProperties["top"];
  rectangleDivBottom39?: CSSProperties["bottom"];
  rectangleDivBackground77?: CSSProperties["background"];
  rectangleDivBackground78?: CSSProperties["background"];
  rectangleDivBackground79?: CSSProperties["background"];
  rectangleDivHeight40?: CSSProperties["height"];
  rectangleDivTop40?: CSSProperties["top"];
  rectangleDivBottom40?: CSSProperties["bottom"];
  rectangleDivBackground80?: CSSProperties["background"];
  rectangleDivHeight41?: CSSProperties["height"];
  rectangleDivTop41?: CSSProperties["top"];
  rectangleDivBottom41?: CSSProperties["bottom"];
  rectangleDivBackground81?: CSSProperties["background"];
  rectangleDivHeight42?: CSSProperties["height"];
  rectangleDivTop42?: CSSProperties["top"];
  rectangleDivBottom42?: CSSProperties["bottom"];
  rectangleDivBackground82?: CSSProperties["background"];
  rectangleDivHeight43?: CSSProperties["height"];
  rectangleDivTop43?: CSSProperties["top"];
  rectangleDivBottom43?: CSSProperties["bottom"];
  rectangleDivBackground83?: CSSProperties["background"];
  rectangleDivHeight44?: CSSProperties["height"];
  rectangleDivTop44?: CSSProperties["top"];
  rectangleDivBottom44?: CSSProperties["bottom"];
  rectangleDivBackground84?: CSSProperties["background"];
  rectangleDivHeight45?: CSSProperties["height"];
  rectangleDivTop45?: CSSProperties["top"];
  rectangleDivBottom45?: CSSProperties["bottom"];
  rectangleDivBackground85?: CSSProperties["background"];
  rectangleDivHeight46?: CSSProperties["height"];
  rectangleDivTop46?: CSSProperties["top"];
  rectangleDivBottom46?: CSSProperties["bottom"];
  rectangleDivBackground86?: CSSProperties["background"];
  rectangleDivHeight47?: CSSProperties["height"];
  rectangleDivTop47?: CSSProperties["top"];
  rectangleDivBottom47?: CSSProperties["bottom"];
  rectangleDivBackground87?: CSSProperties["background"];
  rectangleDivBackground88?: CSSProperties["background"];
  rectangleDivBackground89?: CSSProperties["background"];
  rectangleDivBackground90?: CSSProperties["background"];
  rectangleDivBackground91?: CSSProperties["background"];
  rectangleDivBackground92?: CSSProperties["background"];
  rectangleDivBackground93?: CSSProperties["background"];
  rectangleDivBackground94?: CSSProperties["background"];
  rectangleDivBackground95?: CSSProperties["background"];
  rectangleDivBackground96?: CSSProperties["background"];
  rectangleDivBackground97?: CSSProperties["background"];
  rectangleDivBackground98?: CSSProperties["background"];
  rectangleDivBackground99?: CSSProperties["background"];
  rectangleDivBackground100?: CSSProperties["background"];
  rectangleDivBackground101?: CSSProperties["background"];
  rectangleDivBackground102?: CSSProperties["background"];
  rectangleDivBackground103?: CSSProperties["background"];
  rectangleDivBackground104?: CSSProperties["background"];
  rectangleDivBackground105?: CSSProperties["background"];
  rectangleDivBackground106?: CSSProperties["background"];
  rectangleDivBackground107?: CSSProperties["background"];
  rectangleDivBackground108?: CSSProperties["background"];
  rectangleDivBackground109?: CSSProperties["background"];
  rectangleDivBackground110?: CSSProperties["background"];
  rectangleDivBackground111?: CSSProperties["background"];
  rectangleDivBackground112?: CSSProperties["background"];
  rectangleDivBackground113?: CSSProperties["background"];
  rectangleDivBackground114?: CSSProperties["background"];
  rectangleDivBackground115?: CSSProperties["background"];
  rectangleDivBackground116?: CSSProperties["background"];
  rectangleDivBackground117?: CSSProperties["background"];
  rectangleDivBackground118?: CSSProperties["background"];
  rectangleDivBackground119?: CSSProperties["background"];
  rectangleDivBackground120?: CSSProperties["background"];
  rectangleDivBackground121?: CSSProperties["background"];
  rectangleDivBackground122?: CSSProperties["background"];
  rectangleDivBackground123?: CSSProperties["background"];
  rectangleDivBackground124?: CSSProperties["background"];
  rectangleDivBackground125?: CSSProperties["background"];
  rectangleDivBackground126?: CSSProperties["background"];
  rectangleDivBackground127?: CSSProperties["background"];
  rectangleDivBackground128?: CSSProperties["background"];
  rectangleDivBackground129?: CSSProperties["background"];
  rectangleDivBackground130?: CSSProperties["background"];
  rectangleDivBackground131?: CSSProperties["background"];
  rectangleDivBackground132?: CSSProperties["background"];
  rectangleDivBackground133?: CSSProperties["background"];
  rectangleDivBackground134?: CSSProperties["background"];
  rectangleDivBackground135?: CSSProperties["background"];
  rectangleDivBackground136?: CSSProperties["background"];
  rectangleDivBackground137?: CSSProperties["background"];
  rectangleDivBackground138?: CSSProperties["background"];
  rectangleDivBackground139?: CSSProperties["background"];
  rectangleDivBackground140?: CSSProperties["background"];
  rectangleDivBackground141?: CSSProperties["background"];
  rectangleDivBackground142?: CSSProperties["background"];
  rectangleDivBackground143?: CSSProperties["background"];
  rectangleDivBackground144?: CSSProperties["background"];
  rectangleDivBackground145?: CSSProperties["background"];
  rectangleDivBackground146?: CSSProperties["background"];
  rectangleDivBackground147?: CSSProperties["background"];
  rectangleDivBackground148?: CSSProperties["background"];
  rectangleDivBackground149?: CSSProperties["background"];
  rectangleDivHeight48?: CSSProperties["height"];
  rectangleDivTop48?: CSSProperties["top"];
  rectangleDivBottom48?: CSSProperties["bottom"];
  rectangleDivBackground150?: CSSProperties["background"];
  rectangleDivHeight49?: CSSProperties["height"];
  rectangleDivTop49?: CSSProperties["top"];
  rectangleDivBottom49?: CSSProperties["bottom"];
  rectangleDivBackground151?: CSSProperties["background"];
  rectangleDivHeight50?: CSSProperties["height"];
  rectangleDivTop50?: CSSProperties["top"];
  rectangleDivBottom50?: CSSProperties["bottom"];
  rectangleDivBackground152?: CSSProperties["background"];
  rectangleDivHeight51?: CSSProperties["height"];
  rectangleDivTop51?: CSSProperties["top"];
  rectangleDivBottom51?: CSSProperties["bottom"];
  rectangleDivBackground153?: CSSProperties["background"];
  rectangleDivHeight52?: CSSProperties["height"];
  rectangleDivTop52?: CSSProperties["top"];
  rectangleDivBottom52?: CSSProperties["bottom"];
  rectangleDivBackground154?: CSSProperties["background"];
  rectangleDivHeight53?: CSSProperties["height"];
  rectangleDivTop53?: CSSProperties["top"];
  rectangleDivBottom53?: CSSProperties["bottom"];
  rectangleDivBackground155?: CSSProperties["background"];
  rectangleDivHeight54?: CSSProperties["height"];
  rectangleDivTop54?: CSSProperties["top"];
  rectangleDivBottom54?: CSSProperties["bottom"];
  rectangleDivBackground156?: CSSProperties["background"];
  rectangleDivHeight55?: CSSProperties["height"];
  rectangleDivTop55?: CSSProperties["top"];
  rectangleDivBottom55?: CSSProperties["bottom"];
  rectangleDivBackground157?: CSSProperties["background"];
  rectangleDivBackground158?: CSSProperties["background"];
  rectangleDivBackground159?: CSSProperties["background"];
  rectangleDivHeight56?: CSSProperties["height"];
  rectangleDivTop56?: CSSProperties["top"];
  rectangleDivBottom56?: CSSProperties["bottom"];
  rectangleDivBackground160?: CSSProperties["background"];
  rectangleDivHeight57?: CSSProperties["height"];
  rectangleDivTop57?: CSSProperties["top"];
  rectangleDivBottom57?: CSSProperties["bottom"];
  rectangleDivBackground161?: CSSProperties["background"];
  rectangleDivHeight58?: CSSProperties["height"];
  rectangleDivTop58?: CSSProperties["top"];
  rectangleDivBottom58?: CSSProperties["bottom"];
  rectangleDivBackground162?: CSSProperties["background"];
  rectangleDivHeight59?: CSSProperties["height"];
  rectangleDivTop59?: CSSProperties["top"];
  rectangleDivBottom59?: CSSProperties["bottom"];
  rectangleDivBackground163?: CSSProperties["background"];
  rectangleDivHeight60?: CSSProperties["height"];
  rectangleDivTop60?: CSSProperties["top"];
  rectangleDivBottom60?: CSSProperties["bottom"];
  rectangleDivBackground164?: CSSProperties["background"];
  rectangleDivHeight61?: CSSProperties["height"];
  rectangleDivTop61?: CSSProperties["top"];
  rectangleDivBottom61?: CSSProperties["bottom"];
  rectangleDivBackground165?: CSSProperties["background"];
  rectangleDivHeight62?: CSSProperties["height"];
  rectangleDivTop62?: CSSProperties["top"];
  rectangleDivBottom62?: CSSProperties["bottom"];
  rectangleDivBackground166?: CSSProperties["background"];
  rectangleDivHeight63?: CSSProperties["height"];
  rectangleDivTop63?: CSSProperties["top"];
  rectangleDivBottom63?: CSSProperties["bottom"];
  rectangleDivBackground167?: CSSProperties["background"];
  rectangleDivBackground168?: CSSProperties["background"];
  rectangleDivBackground169?: CSSProperties["background"];
};

const Audio1: NextPage<Audio1Type> = ({
  audioWidth,
  audioHeight,
  rectangleDivBorderRadius,
  rectangleDivBorderRadius1,
  rectangleDivBorderRadius2,
  rectangleDivBorderRadius3,
  rectangleDivBorderRadius4,
  rectangleDivBorderRadius5,
  rectangleDivBorderRadius6,
  rectangleDivBorderRadius7,
  rectangleDivBorderRadius8,
  rectangleDivBorderRadius9,
  rectangleDivBorderRadius10,
  rectangleDivBorderRadius11,
  rectangleDivBorderRadius12,
  rectangleDivBorderRadius13,
  rectangleDivBorderRadius14,
  rectangleDivBorderRadius15,
  rectangleDivBorderRadius16,
  rectangleDivBorderRadius17,
  rectangleDivBorderRadius18,
  rectangleDivBorderRadius19,
  rectangleDivBorderRadius20,
  rectangleDivBorderRadius21,
  rectangleDivBorderRadius22,
  rectangleDivBorderRadius23,
  rectangleDivBorderRadius24,
  rectangleDivBorderRadius25,
  rectangleDivBorderRadius26,
  rectangleDivBorderRadius27,
  rectangleDivBorderRadius28,
  rectangleDivBorderRadius29,
  rectangleDivBorderRadius30,
  rectangleDivBorderRadius31,
  rectangleDivBorderRadius32,
  rectangleDivBorderRadius33,
  rectangleDivRight,
  rectangleDivBorderRadius34,
  rectangleDivBorderRadius35,
  rectangleDivBorderRadius36,
  rectangleDivBorderRadius37,
  rectangleDivLeft,
  rectangleDivBorderRadius38,
  rectangleDivBorderRadius39,
  rectangleDivBorderRadius40,
  rectangleDivBorderRadius41,
  rectangleDivBorderRadius42,
  rectangleDivBorderRadius43,
  rectangleDivBorderRadius44,
  rectangleDivBorderRadius45,
  rectangleDivBorderRadius46,
  rectangleDivBorderRadius47,
  rectangleDivBorderRadius48,
  rectangleDivBorderRadius49,
  rectangleDivBorderRadius50,
  rectangleDivBorderRadius51,
  rectangleDivBorderRadius52,
  rectangleDivBorderRadius53,
  rectangleDivBorderRadius54,
  rectangleDivBorderRadius55,
  rectangleDivBorderRadius56,
  rectangleDivBorderRadius57,
  rectangleDivLeft1,
  rectangleDivBorderRadius58,
  rectangleDivBorderRadius59,
  rectangleDivBorderRadius60,
  rectangleDivBorderRadius61,
  rectangleDivBorderRadius62,
  rectangleDivBorderRadius63,
  rectangleDivBorderRadius64,
  rectangleDivBorderRadius65,
  rectangleDivBorderRadius66,
  rectangleDivBorderRadius67,
  rectangleDivBorderRadius68,
  rectangleDivLeft2,
  rectangleDivBorderRadius69,
  rectangleDivBorderRadius70,
  rectangleDivBorderRadius71,
  rectangleDivBorderRadius72,
  rectangleDivBorderRadius73,
  rectangleDivBorderRadius74,
  rectangleDivBorderRadius75,
  rectangleDivBorderRadius76,
  rectangleDivRight1,
  rectangleDivBorderRadius77,
  rectangleDivBorderRadius78,
  rectangleDivLeft3,
  rectangleDivBorderRadius79,
  rectangleDivBorderRadius80,
  rectangleDivBorderRadius81,
  rectangleDivBorderRadius82,
  rectangleDivBorderRadius83,
  rectangleDivBorderRadius84,
  rectangleDivBorderRadius85,
  rectangleDivBorderRadius86,
  rectangleDivRight2,
  rectangleDivBorderRadius87,
  rectangleDivBorderRadius88,
  rectangleDivLeft4,
  rectangleDivBorderRadius89,
  rectangleDivBorderRadius90,
  rectangleDivBorderRadius91,
  rectangleDivBorderRadius92,
  rectangleDivBorderRadius93,
  rectangleDivBorderRadius94,
  rectangleDivBorderRadius95,
  rectangleDivBorderRadius96,
  rectangleDivBorderRadius97,
  rectangleDivBorderRadius98,
  rectangleDivBorderRadius99,
  rectangleDivBorderRadius100,
  rectangleDivBorderRadius101,
  rectangleDivBorderRadius102,
  rectangleDivBorderRadius103,
  rectangleDivBorderRadius104,
  rectangleDivBorderRadius105,
  rectangleDivBorderRadius106,
  rectangleDivBorderRadius107,
  rectangleDivBorderRadius108,
  rectangleDivBorderRadius109,
  rectangleDivBorderRadius110,
  rectangleDivBorderRadius111,
  rectangleDivBorderRadius112,
  rectangleDivBorderRadius113,
  rectangleDivBorderRadius114,
  rectangleDivBorderRadius115,
  rectangleDivBorderRadius116,
  rectangleDivBorderRadius117,
  rectangleDivLeft5,
  rectangleDivBorderRadius118,
  rectangleDivBorderRadius119,
  rectangleDivBorderRadius120,
  rectangleDivBorderRadius121,
  rectangleDivBorderRadius122,
  rectangleDivBorderRadius123,
  rectangleDivRight3,
  rectangleDivBorderRadius124,
  rectangleDivBorderRadius125,
  rectangleDivBorderRadius126,
  rectangleDivBorderRadius127,
  rectangleDivLeft6,
  rectangleDivBorderRadius128,
  rectangleDivBorderRadius129,
  rectangleDivBorderRadius130,
  rectangleDivBorderRadius131,
  rectangleDivBorderRadius132,
  rectangleDivBorderRadius133,
  rectangleDivBorderRadius134,
  rectangleDivBorderRadius135,
  rectangleDivBorderRadius136,
  rectangleDivBorderRadius137,
  rectangleDivLeft7,
  rectangleDivBorderRadius138,
  rectangleDivBorderRadius139,
  rectangleDivBorderRadius140,
  rectangleDivBorderRadius141,
  rectangleDivBorderRadius142,
  rectangleDivBorderRadius143,
  rectangleDivBorderRadius144,
  rectangleDivBorderRadius145,
  rectangleDivBorderRadius146,
  rectangleDivBorderRadius147,
  rectangleDivBorderRadius148,
  rectangleDivBorderRadius149,
  rectangleDivBorderRadius150,
  rectangleDivBorderRadius151,
  rectangleDivBorderRadius152,
  rectangleDivBorderRadius153,
  rectangleDivRight4,
  rectangleDivBorderRadius154,
  rectangleDivBorderRadius155,
  rectangleDivBorderRadius156,
  rectangleDivBorderRadius157,
  rectangleDivLeft8,
  rectangleDivBorderRadius158,
  rectangleDivBorderRadius159,
  rectangleDivBorderRadius160,
  rectangleDivBorderRadius161,
  rectangleDivBorderRadius162,
  rectangleDivBorderRadius163,
  rectangleDivBorderRadius164,
  rectangleDivBorderRadius165,
  rectangleDivBorderRadius166,
  rectangleDivBorderRadius167,
  rectangleDivBorderRadius168,
  rectangleDivLeft9,
  rectangleDivBorderRadius169,
  audioPosition,
  divPosition,
  divHeight,
  divWidth,
  divTop,
  divRight,
  divBottom,
  divLeft,
  rectangleDivHeight,
  rectangleDivTop,
  rectangleDivBottom,
  rectangleDivBackground,
  rectangleDivHeight1,
  rectangleDivTop1,
  rectangleDivBottom1,
  rectangleDivBackground1,
  rectangleDivHeight2,
  rectangleDivTop2,
  rectangleDivBottom2,
  rectangleDivBackground2,
  rectangleDivHeight3,
  rectangleDivTop3,
  rectangleDivBottom3,
  rectangleDivBackground3,
  rectangleDivHeight4,
  rectangleDivTop4,
  rectangleDivBottom4,
  rectangleDivBackground4,
  rectangleDivHeight5,
  rectangleDivTop5,
  rectangleDivBottom5,
  rectangleDivBackground5,
  rectangleDivHeight6,
  rectangleDivTop6,
  rectangleDivBottom6,
  rectangleDivBackground6,
  rectangleDivHeight7,
  rectangleDivTop7,
  rectangleDivBottom7,
  rectangleDivBackground7,
  rectangleDivBackground8,
  rectangleDivBackground9,
  rectangleDivHeight8,
  rectangleDivTop8,
  rectangleDivBottom8,
  rectangleDivBackground10,
  rectangleDivHeight9,
  rectangleDivTop9,
  rectangleDivBottom9,
  rectangleDivBackground11,
  rectangleDivHeight10,
  rectangleDivTop10,
  rectangleDivBottom10,
  rectangleDivBackground12,
  rectangleDivHeight11,
  rectangleDivTop11,
  rectangleDivBottom11,
  rectangleDivBackground13,
  rectangleDivHeight12,
  rectangleDivTop12,
  rectangleDivBottom12,
  rectangleDivBackground14,
  rectangleDivHeight13,
  rectangleDivTop13,
  rectangleDivBottom13,
  rectangleDivBackground15,
  rectangleDivHeight14,
  rectangleDivTop14,
  rectangleDivBottom14,
  rectangleDivBackground16,
  rectangleDivHeight15,
  rectangleDivTop15,
  rectangleDivBottom15,
  rectangleDivBackground17,
  rectangleDivBackground18,
  rectangleDivBackground19,
  rectangleDivHeight16,
  rectangleDivTop16,
  rectangleDivBottom16,
  rectangleDivBackground20,
  rectangleDivHeight17,
  rectangleDivTop17,
  rectangleDivBottom17,
  rectangleDivBackground21,
  rectangleDivHeight18,
  rectangleDivTop18,
  rectangleDivBottom18,
  rectangleDivBackground22,
  rectangleDivHeight19,
  rectangleDivTop19,
  rectangleDivBottom19,
  rectangleDivBackground23,
  rectangleDivHeight20,
  rectangleDivTop20,
  rectangleDivBottom20,
  rectangleDivBackground24,
  rectangleDivHeight21,
  rectangleDivTop21,
  rectangleDivBottom21,
  rectangleDivBackground25,
  rectangleDivHeight22,
  rectangleDivTop22,
  rectangleDivBottom22,
  rectangleDivBackground26,
  rectangleDivHeight23,
  rectangleDivTop23,
  rectangleDivBottom23,
  rectangleDivBackground27,
  rectangleDivBackground28,
  rectangleDivBackground29,
  rectangleDivBackground30,
  rectangleDivBackground31,
  rectangleDivBackground32,
  rectangleDivBackground33,
  rectangleDivBackground34,
  rectangleDivBackground35,
  rectangleDivBackground36,
  rectangleDivBackground37,
  rectangleDivBackground38,
  rectangleDivBackground39,
  rectangleDivBackground40,
  rectangleDivBackground41,
  rectangleDivBackground42,
  rectangleDivBackground43,
  rectangleDivBackground44,
  rectangleDivBackground45,
  rectangleDivBackground46,
  rectangleDivBackground47,
  rectangleDivBackground48,
  rectangleDivBackground49,
  rectangleDivBackground50,
  rectangleDivBackground51,
  rectangleDivBackground52,
  rectangleDivBackground53,
  rectangleDivBackground54,
  rectangleDivBackground55,
  rectangleDivBackground56,
  rectangleDivBackground57,
  rectangleDivBackground58,
  rectangleDivBackground59,
  rectangleDivHeight24,
  rectangleDivTop24,
  rectangleDivBottom24,
  rectangleDivBackground60,
  rectangleDivHeight25,
  rectangleDivTop25,
  rectangleDivBottom25,
  rectangleDivBackground61,
  rectangleDivHeight26,
  rectangleDivTop26,
  rectangleDivBottom26,
  rectangleDivBackground62,
  rectangleDivHeight27,
  rectangleDivTop27,
  rectangleDivBottom27,
  rectangleDivBackground63,
  rectangleDivHeight28,
  rectangleDivTop28,
  rectangleDivBottom28,
  rectangleDivBackground64,
  rectangleDivHeight29,
  rectangleDivTop29,
  rectangleDivBottom29,
  rectangleDivBackground65,
  rectangleDivHeight30,
  rectangleDivTop30,
  rectangleDivBottom30,
  rectangleDivBackground66,
  rectangleDivHeight31,
  rectangleDivTop31,
  rectangleDivBottom31,
  rectangleDivBackground67,
  rectangleDivBackground68,
  rectangleDivBackground69,
  rectangleDivHeight32,
  rectangleDivTop32,
  rectangleDivBottom32,
  rectangleDivBackground70,
  rectangleDivHeight33,
  rectangleDivTop33,
  rectangleDivBottom33,
  rectangleDivBackground71,
  rectangleDivHeight34,
  rectangleDivTop34,
  rectangleDivBottom34,
  rectangleDivBackground72,
  rectangleDivHeight35,
  rectangleDivTop35,
  rectangleDivBottom35,
  rectangleDivBackground73,
  rectangleDivHeight36,
  rectangleDivTop36,
  rectangleDivBottom36,
  rectangleDivBackground74,
  rectangleDivHeight37,
  rectangleDivTop37,
  rectangleDivBottom37,
  rectangleDivBackground75,
  rectangleDivHeight38,
  rectangleDivTop38,
  rectangleDivBottom38,
  rectangleDivBackground76,
  rectangleDivHeight39,
  rectangleDivTop39,
  rectangleDivBottom39,
  rectangleDivBackground77,
  rectangleDivBackground78,
  rectangleDivBackground79,
  rectangleDivHeight40,
  rectangleDivTop40,
  rectangleDivBottom40,
  rectangleDivBackground80,
  rectangleDivHeight41,
  rectangleDivTop41,
  rectangleDivBottom41,
  rectangleDivBackground81,
  rectangleDivHeight42,
  rectangleDivTop42,
  rectangleDivBottom42,
  rectangleDivBackground82,
  rectangleDivHeight43,
  rectangleDivTop43,
  rectangleDivBottom43,
  rectangleDivBackground83,
  rectangleDivHeight44,
  rectangleDivTop44,
  rectangleDivBottom44,
  rectangleDivBackground84,
  rectangleDivHeight45,
  rectangleDivTop45,
  rectangleDivBottom45,
  rectangleDivBackground85,
  rectangleDivHeight46,
  rectangleDivTop46,
  rectangleDivBottom46,
  rectangleDivBackground86,
  rectangleDivHeight47,
  rectangleDivTop47,
  rectangleDivBottom47,
  rectangleDivBackground87,
  rectangleDivBackground88,
  rectangleDivBackground89,
  rectangleDivBackground90,
  rectangleDivBackground91,
  rectangleDivBackground92,
  rectangleDivBackground93,
  rectangleDivBackground94,
  rectangleDivBackground95,
  rectangleDivBackground96,
  rectangleDivBackground97,
  rectangleDivBackground98,
  rectangleDivBackground99,
  rectangleDivBackground100,
  rectangleDivBackground101,
  rectangleDivBackground102,
  rectangleDivBackground103,
  rectangleDivBackground104,
  rectangleDivBackground105,
  rectangleDivBackground106,
  rectangleDivBackground107,
  rectangleDivBackground108,
  rectangleDivBackground109,
  rectangleDivBackground110,
  rectangleDivBackground111,
  rectangleDivBackground112,
  rectangleDivBackground113,
  rectangleDivBackground114,
  rectangleDivBackground115,
  rectangleDivBackground116,
  rectangleDivBackground117,
  rectangleDivBackground118,
  rectangleDivBackground119,
  rectangleDivBackground120,
  rectangleDivBackground121,
  rectangleDivBackground122,
  rectangleDivBackground123,
  rectangleDivBackground124,
  rectangleDivBackground125,
  rectangleDivBackground126,
  rectangleDivBackground127,
  rectangleDivBackground128,
  rectangleDivBackground129,
  rectangleDivBackground130,
  rectangleDivBackground131,
  rectangleDivBackground132,
  rectangleDivBackground133,
  rectangleDivBackground134,
  rectangleDivBackground135,
  rectangleDivBackground136,
  rectangleDivBackground137,
  rectangleDivBackground138,
  rectangleDivBackground139,
  rectangleDivBackground140,
  rectangleDivBackground141,
  rectangleDivBackground142,
  rectangleDivBackground143,
  rectangleDivBackground144,
  rectangleDivBackground145,
  rectangleDivBackground146,
  rectangleDivBackground147,
  rectangleDivBackground148,
  rectangleDivBackground149,
  rectangleDivHeight48,
  rectangleDivTop48,
  rectangleDivBottom48,
  rectangleDivBackground150,
  rectangleDivHeight49,
  rectangleDivTop49,
  rectangleDivBottom49,
  rectangleDivBackground151,
  rectangleDivHeight50,
  rectangleDivTop50,
  rectangleDivBottom50,
  rectangleDivBackground152,
  rectangleDivHeight51,
  rectangleDivTop51,
  rectangleDivBottom51,
  rectangleDivBackground153,
  rectangleDivHeight52,
  rectangleDivTop52,
  rectangleDivBottom52,
  rectangleDivBackground154,
  rectangleDivHeight53,
  rectangleDivTop53,
  rectangleDivBottom53,
  rectangleDivBackground155,
  rectangleDivHeight54,
  rectangleDivTop54,
  rectangleDivBottom54,
  rectangleDivBackground156,
  rectangleDivHeight55,
  rectangleDivTop55,
  rectangleDivBottom55,
  rectangleDivBackground157,
  rectangleDivBackground158,
  rectangleDivBackground159,
  rectangleDivHeight56,
  rectangleDivTop56,
  rectangleDivBottom56,
  rectangleDivBackground160,
  rectangleDivHeight57,
  rectangleDivTop57,
  rectangleDivBottom57,
  rectangleDivBackground161,
  rectangleDivHeight58,
  rectangleDivTop58,
  rectangleDivBottom58,
  rectangleDivBackground162,
  rectangleDivHeight59,
  rectangleDivTop59,
  rectangleDivBottom59,
  rectangleDivBackground163,
  rectangleDivHeight60,
  rectangleDivTop60,
  rectangleDivBottom60,
  rectangleDivBackground164,
  rectangleDivHeight61,
  rectangleDivTop61,
  rectangleDivBottom61,
  rectangleDivBackground165,
  rectangleDivHeight62,
  rectangleDivTop62,
  rectangleDivBottom62,
  rectangleDivBackground166,
  rectangleDivHeight63,
  rectangleDivTop63,
  rectangleDivBottom63,
  rectangleDivBackground167,
  rectangleDivBackground168,
  rectangleDivBackground169,
}) => {
  const audioStyle: CSSProperties = useMemo(() => {
    return {
      width: audioWidth,
      height: audioHeight,
      position: audioPosition,
    };
  }, [audioWidth, audioHeight, audioPosition]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius,
      height: rectangleDivHeight,
      top: rectangleDivTop,
      bottom: rectangleDivBottom,
      background: rectangleDivBackground,
    };
  }, [
    rectangleDivBorderRadius,
    rectangleDivHeight,
    rectangleDivTop,
    rectangleDivBottom,
    rectangleDivBackground,
  ]);

  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius1,
      height: rectangleDivHeight1,
      top: rectangleDivTop1,
      bottom: rectangleDivBottom1,
      background: rectangleDivBackground1,
    };
  }, [
    rectangleDivBorderRadius1,
    rectangleDivHeight1,
    rectangleDivTop1,
    rectangleDivBottom1,
    rectangleDivBackground1,
  ]);

  const rectangleDiv2Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius2,
      height: rectangleDivHeight2,
      top: rectangleDivTop2,
      bottom: rectangleDivBottom2,
      background: rectangleDivBackground2,
    };
  }, [
    rectangleDivBorderRadius2,
    rectangleDivHeight2,
    rectangleDivTop2,
    rectangleDivBottom2,
    rectangleDivBackground2,
  ]);

  const rectangleDiv3Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius3,
      height: rectangleDivHeight3,
      top: rectangleDivTop3,
      bottom: rectangleDivBottom3,
      background: rectangleDivBackground3,
    };
  }, [
    rectangleDivBorderRadius3,
    rectangleDivHeight3,
    rectangleDivTop3,
    rectangleDivBottom3,
    rectangleDivBackground3,
  ]);

  const rectangleDiv4Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius4,
      height: rectangleDivHeight4,
      top: rectangleDivTop4,
      bottom: rectangleDivBottom4,
      background: rectangleDivBackground4,
    };
  }, [
    rectangleDivBorderRadius4,
    rectangleDivHeight4,
    rectangleDivTop4,
    rectangleDivBottom4,
    rectangleDivBackground4,
  ]);

  const rectangleDiv5Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius5,
      height: rectangleDivHeight5,
      top: rectangleDivTop5,
      bottom: rectangleDivBottom5,
      background: rectangleDivBackground5,
    };
  }, [
    rectangleDivBorderRadius5,
    rectangleDivHeight5,
    rectangleDivTop5,
    rectangleDivBottom5,
    rectangleDivBackground5,
  ]);

  const rectangleDiv6Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius6,
      height: rectangleDivHeight6,
      top: rectangleDivTop6,
      bottom: rectangleDivBottom6,
      background: rectangleDivBackground6,
    };
  }, [
    rectangleDivBorderRadius6,
    rectangleDivHeight6,
    rectangleDivTop6,
    rectangleDivBottom6,
    rectangleDivBackground6,
  ]);

  const rectangleDiv7Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius7,
      height: rectangleDivHeight7,
      top: rectangleDivTop7,
      bottom: rectangleDivBottom7,
      background: rectangleDivBackground7,
    };
  }, [
    rectangleDivBorderRadius7,
    rectangleDivHeight7,
    rectangleDivTop7,
    rectangleDivBottom7,
    rectangleDivBackground7,
  ]);

  const rectangleDiv8Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius8,
      background: rectangleDivBackground8,
    };
  }, [rectangleDivBorderRadius8, rectangleDivBackground8]);

  const rectangleDiv9Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius9,
      background: rectangleDivBackground9,
    };
  }, [rectangleDivBorderRadius9, rectangleDivBackground9]);

  const rectangleDiv10Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius10,
      height: rectangleDivHeight8,
      top: rectangleDivTop8,
      bottom: rectangleDivBottom8,
      background: rectangleDivBackground10,
    };
  }, [
    rectangleDivBorderRadius10,
    rectangleDivHeight8,
    rectangleDivTop8,
    rectangleDivBottom8,
    rectangleDivBackground10,
  ]);

  const rectangleDiv11Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius11,
      height: rectangleDivHeight9,
      top: rectangleDivTop9,
      bottom: rectangleDivBottom9,
      background: rectangleDivBackground11,
    };
  }, [
    rectangleDivBorderRadius11,
    rectangleDivHeight9,
    rectangleDivTop9,
    rectangleDivBottom9,
    rectangleDivBackground11,
  ]);

  const rectangleDiv12Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius12,
      height: rectangleDivHeight10,
      top: rectangleDivTop10,
      bottom: rectangleDivBottom10,
      background: rectangleDivBackground12,
    };
  }, [
    rectangleDivBorderRadius12,
    rectangleDivHeight10,
    rectangleDivTop10,
    rectangleDivBottom10,
    rectangleDivBackground12,
  ]);

  const rectangleDiv13Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius13,
      height: rectangleDivHeight11,
      top: rectangleDivTop11,
      bottom: rectangleDivBottom11,
      background: rectangleDivBackground13,
    };
  }, [
    rectangleDivBorderRadius13,
    rectangleDivHeight11,
    rectangleDivTop11,
    rectangleDivBottom11,
    rectangleDivBackground13,
  ]);

  const rectangleDiv14Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius14,
      height: rectangleDivHeight12,
      top: rectangleDivTop12,
      bottom: rectangleDivBottom12,
      background: rectangleDivBackground14,
    };
  }, [
    rectangleDivBorderRadius14,
    rectangleDivHeight12,
    rectangleDivTop12,
    rectangleDivBottom12,
    rectangleDivBackground14,
  ]);

  const rectangleDiv15Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius15,
      height: rectangleDivHeight13,
      top: rectangleDivTop13,
      bottom: rectangleDivBottom13,
      background: rectangleDivBackground15,
    };
  }, [
    rectangleDivBorderRadius15,
    rectangleDivHeight13,
    rectangleDivTop13,
    rectangleDivBottom13,
    rectangleDivBackground15,
  ]);

  const rectangleDiv16Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius16,
      height: rectangleDivHeight14,
      top: rectangleDivTop14,
      bottom: rectangleDivBottom14,
      background: rectangleDivBackground16,
    };
  }, [
    rectangleDivBorderRadius16,
    rectangleDivHeight14,
    rectangleDivTop14,
    rectangleDivBottom14,
    rectangleDivBackground16,
  ]);

  const rectangleDiv17Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius17,
      height: rectangleDivHeight15,
      top: rectangleDivTop15,
      bottom: rectangleDivBottom15,
      background: rectangleDivBackground17,
    };
  }, [
    rectangleDivBorderRadius17,
    rectangleDivHeight15,
    rectangleDivTop15,
    rectangleDivBottom15,
    rectangleDivBackground17,
  ]);

  const rectangleDiv18Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius18,
      background: rectangleDivBackground18,
    };
  }, [rectangleDivBorderRadius18, rectangleDivBackground18]);

  const rectangleDiv19Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius19,
      background: rectangleDivBackground19,
    };
  }, [rectangleDivBorderRadius19, rectangleDivBackground19]);

  const rectangleDiv20Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius20,
      height: rectangleDivHeight16,
      top: rectangleDivTop16,
      bottom: rectangleDivBottom16,
      background: rectangleDivBackground20,
    };
  }, [
    rectangleDivBorderRadius20,
    rectangleDivHeight16,
    rectangleDivTop16,
    rectangleDivBottom16,
    rectangleDivBackground20,
  ]);

  const rectangleDiv21Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius21,
      height: rectangleDivHeight17,
      top: rectangleDivTop17,
      bottom: rectangleDivBottom17,
      background: rectangleDivBackground21,
    };
  }, [
    rectangleDivBorderRadius21,
    rectangleDivHeight17,
    rectangleDivTop17,
    rectangleDivBottom17,
    rectangleDivBackground21,
  ]);

  const rectangleDiv22Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius22,
      height: rectangleDivHeight18,
      top: rectangleDivTop18,
      bottom: rectangleDivBottom18,
      background: rectangleDivBackground22,
    };
  }, [
    rectangleDivBorderRadius22,
    rectangleDivHeight18,
    rectangleDivTop18,
    rectangleDivBottom18,
    rectangleDivBackground22,
  ]);

  const rectangleDiv23Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius23,
      height: rectangleDivHeight19,
      top: rectangleDivTop19,
      bottom: rectangleDivBottom19,
      background: rectangleDivBackground23,
    };
  }, [
    rectangleDivBorderRadius23,
    rectangleDivHeight19,
    rectangleDivTop19,
    rectangleDivBottom19,
    rectangleDivBackground23,
  ]);

  const rectangleDiv24Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius24,
      height: rectangleDivHeight20,
      top: rectangleDivTop20,
      bottom: rectangleDivBottom20,
      background: rectangleDivBackground24,
    };
  }, [
    rectangleDivBorderRadius24,
    rectangleDivHeight20,
    rectangleDivTop20,
    rectangleDivBottom20,
    rectangleDivBackground24,
  ]);

  const rectangleDiv25Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius25,
      height: rectangleDivHeight21,
      top: rectangleDivTop21,
      bottom: rectangleDivBottom21,
      background: rectangleDivBackground25,
    };
  }, [
    rectangleDivBorderRadius25,
    rectangleDivHeight21,
    rectangleDivTop21,
    rectangleDivBottom21,
    rectangleDivBackground25,
  ]);

  const rectangleDiv26Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius26,
      height: rectangleDivHeight22,
      top: rectangleDivTop22,
      bottom: rectangleDivBottom22,
      background: rectangleDivBackground26,
    };
  }, [
    rectangleDivBorderRadius26,
    rectangleDivHeight22,
    rectangleDivTop22,
    rectangleDivBottom22,
    rectangleDivBackground26,
  ]);

  const rectangleDiv27Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius27,
      height: rectangleDivHeight23,
      top: rectangleDivTop23,
      bottom: rectangleDivBottom23,
      background: rectangleDivBackground27,
    };
  }, [
    rectangleDivBorderRadius27,
    rectangleDivHeight23,
    rectangleDivTop23,
    rectangleDivBottom23,
    rectangleDivBackground27,
  ]);

  const rectangleDiv28Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius28,
      background: rectangleDivBackground28,
    };
  }, [rectangleDivBorderRadius28, rectangleDivBackground28]);

  const rectangleDiv29Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius29,
      background: rectangleDivBackground29,
    };
  }, [rectangleDivBorderRadius29, rectangleDivBackground29]);

  const rectangleDiv30Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius30,
      background: rectangleDivBackground30,
    };
  }, [rectangleDivBorderRadius30, rectangleDivBackground30]);

  const rectangleDiv31Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius31,
      background: rectangleDivBackground31,
    };
  }, [rectangleDivBorderRadius31, rectangleDivBackground31]);

  const rectangleDiv32Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius32,
      background: rectangleDivBackground32,
    };
  }, [rectangleDivBorderRadius32, rectangleDivBackground32]);

  const rectangleDiv33Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius33,
      background: rectangleDivBackground33,
    };
  }, [rectangleDivBorderRadius33, rectangleDivBackground33]);

  const rectangleDiv34Style: CSSProperties = useMemo(() => {
    return {
      right: rectangleDivRight,
      borderRadius: rectangleDivBorderRadius34,
      background: rectangleDivBackground34,
    };
  }, [rectangleDivRight, rectangleDivBorderRadius34, rectangleDivBackground34]);

  const rectangleDiv35Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius35,
      background: rectangleDivBackground35,
    };
  }, [rectangleDivBorderRadius35, rectangleDivBackground35]);

  const rectangleDiv36Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius36,
      background: rectangleDivBackground36,
    };
  }, [rectangleDivBorderRadius36, rectangleDivBackground36]);

  const rectangleDiv37Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius37,
      background: rectangleDivBackground37,
    };
  }, [rectangleDivBorderRadius37, rectangleDivBackground37]);

  const rectangleDiv38Style: CSSProperties = useMemo(() => {
    return {
      left: rectangleDivLeft,
      borderRadius: rectangleDivBorderRadius38,
      background: rectangleDivBackground38,
    };
  }, [rectangleDivLeft, rectangleDivBorderRadius38, rectangleDivBackground38]);

  const rectangleDiv39Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius39,
      background: rectangleDivBackground39,
    };
  }, [rectangleDivBorderRadius39, rectangleDivBackground39]);

  const rectangleDiv40Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius40,
      background: rectangleDivBackground40,
    };
  }, [rectangleDivBorderRadius40, rectangleDivBackground40]);

  const rectangleDiv41Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius41,
      background: rectangleDivBackground41,
    };
  }, [rectangleDivBorderRadius41, rectangleDivBackground41]);

  const rectangleDiv42Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius42,
      background: rectangleDivBackground42,
    };
  }, [rectangleDivBorderRadius42, rectangleDivBackground42]);

  const rectangleDiv43Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius43,
      background: rectangleDivBackground43,
    };
  }, [rectangleDivBorderRadius43, rectangleDivBackground43]);

  const rectangleDiv44Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius44,
      background: rectangleDivBackground44,
    };
  }, [rectangleDivBorderRadius44, rectangleDivBackground44]);

  const rectangleDiv45Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius45,
      background: rectangleDivBackground45,
    };
  }, [rectangleDivBorderRadius45, rectangleDivBackground45]);

  const rectangleDiv46Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius46,
      background: rectangleDivBackground46,
    };
  }, [rectangleDivBorderRadius46, rectangleDivBackground46]);

  const rectangleDiv47Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius47,
      background: rectangleDivBackground47,
    };
  }, [rectangleDivBorderRadius47, rectangleDivBackground47]);

  const rectangleDiv48Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius48,
      background: rectangleDivBackground48,
    };
  }, [rectangleDivBorderRadius48, rectangleDivBackground48]);

  const rectangleDiv49Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius49,
      background: rectangleDivBackground49,
    };
  }, [rectangleDivBorderRadius49, rectangleDivBackground49]);

  const rectangleDiv50Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius50,
      background: rectangleDivBackground50,
    };
  }, [rectangleDivBorderRadius50, rectangleDivBackground50]);

  const rectangleDiv51Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius51,
      background: rectangleDivBackground51,
    };
  }, [rectangleDivBorderRadius51, rectangleDivBackground51]);

  const rectangleDiv52Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius52,
      background: rectangleDivBackground52,
    };
  }, [rectangleDivBorderRadius52, rectangleDivBackground52]);

  const rectangleDiv53Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius53,
      background: rectangleDivBackground53,
    };
  }, [rectangleDivBorderRadius53, rectangleDivBackground53]);

  const rectangleDiv54Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius54,
      background: rectangleDivBackground54,
    };
  }, [rectangleDivBorderRadius54, rectangleDivBackground54]);

  const rectangleDiv55Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius55,
      background: rectangleDivBackground55,
    };
  }, [rectangleDivBorderRadius55, rectangleDivBackground55]);

  const rectangleDiv56Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius56,
      background: rectangleDivBackground56,
    };
  }, [rectangleDivBorderRadius56, rectangleDivBackground56]);

  const rectangleDiv57Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius57,
      background: rectangleDivBackground57,
    };
  }, [rectangleDivBorderRadius57, rectangleDivBackground57]);

  const rectangleDiv58Style: CSSProperties = useMemo(() => {
    return {
      left: rectangleDivLeft1,
      borderRadius: rectangleDivBorderRadius58,
      background: rectangleDivBackground58,
    };
  }, [rectangleDivLeft1, rectangleDivBorderRadius58, rectangleDivBackground58]);

  const rectangleDiv59Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius59,
      background: rectangleDivBackground59,
    };
  }, [rectangleDivBorderRadius59, rectangleDivBackground59]);

  const rectangleDiv60Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius60,
      height: rectangleDivHeight24,
      top: rectangleDivTop24,
      bottom: rectangleDivBottom24,
      background: rectangleDivBackground60,
    };
  }, [
    rectangleDivBorderRadius60,
    rectangleDivHeight24,
    rectangleDivTop24,
    rectangleDivBottom24,
    rectangleDivBackground60,
  ]);

  const rectangleDiv61Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius61,
      height: rectangleDivHeight25,
      top: rectangleDivTop25,
      bottom: rectangleDivBottom25,
      background: rectangleDivBackground61,
    };
  }, [
    rectangleDivBorderRadius61,
    rectangleDivHeight25,
    rectangleDivTop25,
    rectangleDivBottom25,
    rectangleDivBackground61,
  ]);

  const rectangleDiv62Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius62,
      height: rectangleDivHeight26,
      top: rectangleDivTop26,
      bottom: rectangleDivBottom26,
      background: rectangleDivBackground62,
    };
  }, [
    rectangleDivBorderRadius62,
    rectangleDivHeight26,
    rectangleDivTop26,
    rectangleDivBottom26,
    rectangleDivBackground62,
  ]);

  const rectangleDiv63Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius63,
      height: rectangleDivHeight27,
      top: rectangleDivTop27,
      bottom: rectangleDivBottom27,
      background: rectangleDivBackground63,
    };
  }, [
    rectangleDivBorderRadius63,
    rectangleDivHeight27,
    rectangleDivTop27,
    rectangleDivBottom27,
    rectangleDivBackground63,
  ]);

  const rectangleDiv64Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius64,
      height: rectangleDivHeight28,
      top: rectangleDivTop28,
      bottom: rectangleDivBottom28,
      background: rectangleDivBackground64,
    };
  }, [
    rectangleDivBorderRadius64,
    rectangleDivHeight28,
    rectangleDivTop28,
    rectangleDivBottom28,
    rectangleDivBackground64,
  ]);

  const rectangleDiv65Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius65,
      height: rectangleDivHeight29,
      top: rectangleDivTop29,
      bottom: rectangleDivBottom29,
      background: rectangleDivBackground65,
    };
  }, [
    rectangleDivBorderRadius65,
    rectangleDivHeight29,
    rectangleDivTop29,
    rectangleDivBottom29,
    rectangleDivBackground65,
  ]);

  const rectangleDiv66Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius66,
      height: rectangleDivHeight30,
      top: rectangleDivTop30,
      bottom: rectangleDivBottom30,
      background: rectangleDivBackground66,
    };
  }, [
    rectangleDivBorderRadius66,
    rectangleDivHeight30,
    rectangleDivTop30,
    rectangleDivBottom30,
    rectangleDivBackground66,
  ]);

  const rectangleDiv67Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius67,
      height: rectangleDivHeight31,
      top: rectangleDivTop31,
      bottom: rectangleDivBottom31,
      background: rectangleDivBackground67,
    };
  }, [
    rectangleDivBorderRadius67,
    rectangleDivHeight31,
    rectangleDivTop31,
    rectangleDivBottom31,
    rectangleDivBackground67,
  ]);

  const rectangleDiv68Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius68,
      background: rectangleDivBackground68,
    };
  }, [rectangleDivBorderRadius68, rectangleDivBackground68]);

  const rectangleDiv69Style: CSSProperties = useMemo(() => {
    return {
      left: rectangleDivLeft2,
      borderRadius: rectangleDivBorderRadius69,
      background: rectangleDivBackground69,
    };
  }, [rectangleDivLeft2, rectangleDivBorderRadius69, rectangleDivBackground69]);

  const rectangleDiv70Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius70,
      height: rectangleDivHeight32,
      top: rectangleDivTop32,
      bottom: rectangleDivBottom32,
      background: rectangleDivBackground70,
    };
  }, [
    rectangleDivBorderRadius70,
    rectangleDivHeight32,
    rectangleDivTop32,
    rectangleDivBottom32,
    rectangleDivBackground70,
  ]);

  const rectangleDiv71Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius71,
      height: rectangleDivHeight33,
      top: rectangleDivTop33,
      bottom: rectangleDivBottom33,
      background: rectangleDivBackground71,
    };
  }, [
    rectangleDivBorderRadius71,
    rectangleDivHeight33,
    rectangleDivTop33,
    rectangleDivBottom33,
    rectangleDivBackground71,
  ]);

  const rectangleDiv72Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius72,
      height: rectangleDivHeight34,
      top: rectangleDivTop34,
      bottom: rectangleDivBottom34,
      background: rectangleDivBackground72,
    };
  }, [
    rectangleDivBorderRadius72,
    rectangleDivHeight34,
    rectangleDivTop34,
    rectangleDivBottom34,
    rectangleDivBackground72,
  ]);

  const rectangleDiv73Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius73,
      height: rectangleDivHeight35,
      top: rectangleDivTop35,
      bottom: rectangleDivBottom35,
      background: rectangleDivBackground73,
    };
  }, [
    rectangleDivBorderRadius73,
    rectangleDivHeight35,
    rectangleDivTop35,
    rectangleDivBottom35,
    rectangleDivBackground73,
  ]);

  const rectangleDiv74Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius74,
      height: rectangleDivHeight36,
      top: rectangleDivTop36,
      bottom: rectangleDivBottom36,
      background: rectangleDivBackground74,
    };
  }, [
    rectangleDivBorderRadius74,
    rectangleDivHeight36,
    rectangleDivTop36,
    rectangleDivBottom36,
    rectangleDivBackground74,
  ]);

  const rectangleDiv75Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius75,
      height: rectangleDivHeight37,
      top: rectangleDivTop37,
      bottom: rectangleDivBottom37,
      background: rectangleDivBackground75,
    };
  }, [
    rectangleDivBorderRadius75,
    rectangleDivHeight37,
    rectangleDivTop37,
    rectangleDivBottom37,
    rectangleDivBackground75,
  ]);

  const rectangleDiv76Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius76,
      height: rectangleDivHeight38,
      top: rectangleDivTop38,
      bottom: rectangleDivBottom38,
      background: rectangleDivBackground76,
    };
  }, [
    rectangleDivBorderRadius76,
    rectangleDivHeight38,
    rectangleDivTop38,
    rectangleDivBottom38,
    rectangleDivBackground76,
  ]);

  const rectangleDiv77Style: CSSProperties = useMemo(() => {
    return {
      right: rectangleDivRight1,
      borderRadius: rectangleDivBorderRadius77,
      height: rectangleDivHeight39,
      top: rectangleDivTop39,
      bottom: rectangleDivBottom39,
      background: rectangleDivBackground77,
    };
  }, [
    rectangleDivRight1,
    rectangleDivBorderRadius77,
    rectangleDivHeight39,
    rectangleDivTop39,
    rectangleDivBottom39,
    rectangleDivBackground77,
  ]);

  const rectangleDiv78Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius78,
      background: rectangleDivBackground78,
    };
  }, [rectangleDivBorderRadius78, rectangleDivBackground78]);

  const rectangleDiv79Style: CSSProperties = useMemo(() => {
    return {
      left: rectangleDivLeft3,
      borderRadius: rectangleDivBorderRadius79,
      background: rectangleDivBackground79,
    };
  }, [rectangleDivLeft3, rectangleDivBorderRadius79, rectangleDivBackground79]);

  const rectangleDiv80Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius80,
      height: rectangleDivHeight40,
      top: rectangleDivTop40,
      bottom: rectangleDivBottom40,
      background: rectangleDivBackground80,
    };
  }, [
    rectangleDivBorderRadius80,
    rectangleDivHeight40,
    rectangleDivTop40,
    rectangleDivBottom40,
    rectangleDivBackground80,
  ]);

  const rectangleDiv81Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius81,
      height: rectangleDivHeight41,
      top: rectangleDivTop41,
      bottom: rectangleDivBottom41,
      background: rectangleDivBackground81,
    };
  }, [
    rectangleDivBorderRadius81,
    rectangleDivHeight41,
    rectangleDivTop41,
    rectangleDivBottom41,
    rectangleDivBackground81,
  ]);

  const rectangleDiv82Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius82,
      height: rectangleDivHeight42,
      top: rectangleDivTop42,
      bottom: rectangleDivBottom42,
      background: rectangleDivBackground82,
    };
  }, [
    rectangleDivBorderRadius82,
    rectangleDivHeight42,
    rectangleDivTop42,
    rectangleDivBottom42,
    rectangleDivBackground82,
  ]);

  const rectangleDiv83Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius83,
      height: rectangleDivHeight43,
      top: rectangleDivTop43,
      bottom: rectangleDivBottom43,
      background: rectangleDivBackground83,
    };
  }, [
    rectangleDivBorderRadius83,
    rectangleDivHeight43,
    rectangleDivTop43,
    rectangleDivBottom43,
    rectangleDivBackground83,
  ]);

  const rectangleDiv84Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius84,
      height: rectangleDivHeight44,
      top: rectangleDivTop44,
      bottom: rectangleDivBottom44,
      background: rectangleDivBackground84,
    };
  }, [
    rectangleDivBorderRadius84,
    rectangleDivHeight44,
    rectangleDivTop44,
    rectangleDivBottom44,
    rectangleDivBackground84,
  ]);

  const rectangleDiv85Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius85,
      height: rectangleDivHeight45,
      top: rectangleDivTop45,
      bottom: rectangleDivBottom45,
      background: rectangleDivBackground85,
    };
  }, [
    rectangleDivBorderRadius85,
    rectangleDivHeight45,
    rectangleDivTop45,
    rectangleDivBottom45,
    rectangleDivBackground85,
  ]);

  const rectangleDiv86Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius86,
      height: rectangleDivHeight46,
      top: rectangleDivTop46,
      bottom: rectangleDivBottom46,
      background: rectangleDivBackground86,
    };
  }, [
    rectangleDivBorderRadius86,
    rectangleDivHeight46,
    rectangleDivTop46,
    rectangleDivBottom46,
    rectangleDivBackground86,
  ]);

  const rectangleDiv87Style: CSSProperties = useMemo(() => {
    return {
      right: rectangleDivRight2,
      borderRadius: rectangleDivBorderRadius87,
      height: rectangleDivHeight47,
      top: rectangleDivTop47,
      bottom: rectangleDivBottom47,
      background: rectangleDivBackground87,
    };
  }, [
    rectangleDivRight2,
    rectangleDivBorderRadius87,
    rectangleDivHeight47,
    rectangleDivTop47,
    rectangleDivBottom47,
    rectangleDivBackground87,
  ]);

  const rectangleDiv88Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius88,
      background: rectangleDivBackground88,
    };
  }, [rectangleDivBorderRadius88, rectangleDivBackground88]);

  const rectangleDiv89Style: CSSProperties = useMemo(() => {
    return {
      left: rectangleDivLeft4,
      borderRadius: rectangleDivBorderRadius89,
      background: rectangleDivBackground89,
    };
  }, [rectangleDivLeft4, rectangleDivBorderRadius89, rectangleDivBackground89]);

  const rectangleDiv90Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius90,
      background: rectangleDivBackground90,
    };
  }, [rectangleDivBorderRadius90, rectangleDivBackground90]);

  const rectangleDiv91Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius91,
      background: rectangleDivBackground91,
    };
  }, [rectangleDivBorderRadius91, rectangleDivBackground91]);

  const rectangleDiv92Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius92,
      background: rectangleDivBackground92,
    };
  }, [rectangleDivBorderRadius92, rectangleDivBackground92]);

  const rectangleDiv93Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius93,
      background: rectangleDivBackground93,
    };
  }, [rectangleDivBorderRadius93, rectangleDivBackground93]);

  const rectangleDiv94Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius94,
      background: rectangleDivBackground94,
    };
  }, [rectangleDivBorderRadius94, rectangleDivBackground94]);

  const rectangleDiv95Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius95,
      background: rectangleDivBackground95,
    };
  }, [rectangleDivBorderRadius95, rectangleDivBackground95]);

  const rectangleDiv96Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius96,
      background: rectangleDivBackground96,
    };
  }, [rectangleDivBorderRadius96, rectangleDivBackground96]);

  const rectangleDiv97Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius97,
      background: rectangleDivBackground97,
    };
  }, [rectangleDivBorderRadius97, rectangleDivBackground97]);

  const rectangleDiv98Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius98,
      background: rectangleDivBackground98,
    };
  }, [rectangleDivBorderRadius98, rectangleDivBackground98]);

  const rectangleDiv99Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius99,
      background: rectangleDivBackground99,
    };
  }, [rectangleDivBorderRadius99, rectangleDivBackground99]);

  const rectangleDiv100Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius100,
      background: rectangleDivBackground100,
    };
  }, [rectangleDivBorderRadius100, rectangleDivBackground100]);

  const rectangleDiv101Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius101,
      background: rectangleDivBackground101,
    };
  }, [rectangleDivBorderRadius101, rectangleDivBackground101]);

  const rectangleDiv102Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius102,
      background: rectangleDivBackground102,
    };
  }, [rectangleDivBorderRadius102, rectangleDivBackground102]);

  const rectangleDiv103Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius103,
      background: rectangleDivBackground103,
    };
  }, [rectangleDivBorderRadius103, rectangleDivBackground103]);

  const rectangleDiv104Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius104,
      background: rectangleDivBackground104,
    };
  }, [rectangleDivBorderRadius104, rectangleDivBackground104]);

  const rectangleDiv105Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius105,
      background: rectangleDivBackground105,
    };
  }, [rectangleDivBorderRadius105, rectangleDivBackground105]);

  const rectangleDiv106Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius106,
      background: rectangleDivBackground106,
    };
  }, [rectangleDivBorderRadius106, rectangleDivBackground106]);

  const rectangleDiv107Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius107,
      background: rectangleDivBackground107,
    };
  }, [rectangleDivBorderRadius107, rectangleDivBackground107]);

  const rectangleDiv108Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius108,
      background: rectangleDivBackground108,
    };
  }, [rectangleDivBorderRadius108, rectangleDivBackground108]);

  const rectangleDiv109Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius109,
      background: rectangleDivBackground109,
    };
  }, [rectangleDivBorderRadius109, rectangleDivBackground109]);

  const rectangleDiv110Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius110,
      background: rectangleDivBackground110,
    };
  }, [rectangleDivBorderRadius110, rectangleDivBackground110]);

  const rectangleDiv111Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius111,
      background: rectangleDivBackground111,
    };
  }, [rectangleDivBorderRadius111, rectangleDivBackground111]);

  const rectangleDiv112Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius112,
      background: rectangleDivBackground112,
    };
  }, [rectangleDivBorderRadius112, rectangleDivBackground112]);

  const rectangleDiv113Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius113,
      background: rectangleDivBackground113,
    };
  }, [rectangleDivBorderRadius113, rectangleDivBackground113]);

  const rectangleDiv114Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius114,
      background: rectangleDivBackground114,
    };
  }, [rectangleDivBorderRadius114, rectangleDivBackground114]);

  const rectangleDiv115Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius115,
      background: rectangleDivBackground115,
    };
  }, [rectangleDivBorderRadius115, rectangleDivBackground115]);

  const rectangleDiv116Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius116,
      background: rectangleDivBackground116,
    };
  }, [rectangleDivBorderRadius116, rectangleDivBackground116]);

  const rectangleDiv117Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius117,
      background: rectangleDivBackground117,
    };
  }, [rectangleDivBorderRadius117, rectangleDivBackground117]);

  const rectangleDiv118Style: CSSProperties = useMemo(() => {
    return {
      left: rectangleDivLeft5,
      borderRadius: rectangleDivBorderRadius118,
      background: rectangleDivBackground118,
    };
  }, [
    rectangleDivLeft5,
    rectangleDivBorderRadius118,
    rectangleDivBackground118,
  ]);

  const rectangleDiv119Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius119,
      background: rectangleDivBackground119,
    };
  }, [rectangleDivBorderRadius119, rectangleDivBackground119]);

  const rectangleDiv120Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius120,
      background: rectangleDivBackground120,
    };
  }, [rectangleDivBorderRadius120, rectangleDivBackground120]);

  const rectangleDiv121Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius121,
      background: rectangleDivBackground121,
    };
  }, [rectangleDivBorderRadius121, rectangleDivBackground121]);

  const rectangleDiv122Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius122,
      background: rectangleDivBackground122,
    };
  }, [rectangleDivBorderRadius122, rectangleDivBackground122]);

  const rectangleDiv123Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius123,
      background: rectangleDivBackground123,
    };
  }, [rectangleDivBorderRadius123, rectangleDivBackground123]);

  const rectangleDiv124Style: CSSProperties = useMemo(() => {
    return {
      right: rectangleDivRight3,
      borderRadius: rectangleDivBorderRadius124,
      background: rectangleDivBackground124,
    };
  }, [
    rectangleDivRight3,
    rectangleDivBorderRadius124,
    rectangleDivBackground124,
  ]);

  const rectangleDiv125Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius125,
      background: rectangleDivBackground125,
    };
  }, [rectangleDivBorderRadius125, rectangleDivBackground125]);

  const rectangleDiv126Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius126,
      background: rectangleDivBackground126,
    };
  }, [rectangleDivBorderRadius126, rectangleDivBackground126]);

  const rectangleDiv127Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius127,
      background: rectangleDivBackground127,
    };
  }, [rectangleDivBorderRadius127, rectangleDivBackground127]);

  const rectangleDiv128Style: CSSProperties = useMemo(() => {
    return {
      left: rectangleDivLeft6,
      borderRadius: rectangleDivBorderRadius128,
      background: rectangleDivBackground128,
    };
  }, [
    rectangleDivLeft6,
    rectangleDivBorderRadius128,
    rectangleDivBackground128,
  ]);

  const rectangleDiv129Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius129,
      background: rectangleDivBackground129,
    };
  }, [rectangleDivBorderRadius129, rectangleDivBackground129]);

  const rectangleDiv130Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius130,
      background: rectangleDivBackground130,
    };
  }, [rectangleDivBorderRadius130, rectangleDivBackground130]);

  const rectangleDiv131Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius131,
      background: rectangleDivBackground131,
    };
  }, [rectangleDivBorderRadius131, rectangleDivBackground131]);

  const rectangleDiv132Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius132,
      background: rectangleDivBackground132,
    };
  }, [rectangleDivBorderRadius132, rectangleDivBackground132]);

  const rectangleDiv133Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius133,
      background: rectangleDivBackground133,
    };
  }, [rectangleDivBorderRadius133, rectangleDivBackground133]);

  const rectangleDiv134Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius134,
      background: rectangleDivBackground134,
    };
  }, [rectangleDivBorderRadius134, rectangleDivBackground134]);

  const rectangleDiv135Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius135,
      background: rectangleDivBackground135,
    };
  }, [rectangleDivBorderRadius135, rectangleDivBackground135]);

  const rectangleDiv136Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius136,
      background: rectangleDivBackground136,
    };
  }, [rectangleDivBorderRadius136, rectangleDivBackground136]);

  const rectangleDiv137Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius137,
      background: rectangleDivBackground137,
    };
  }, [rectangleDivBorderRadius137, rectangleDivBackground137]);

  const rectangleDiv138Style: CSSProperties = useMemo(() => {
    return {
      left: rectangleDivLeft7,
      borderRadius: rectangleDivBorderRadius138,
      background: rectangleDivBackground138,
    };
  }, [
    rectangleDivLeft7,
    rectangleDivBorderRadius138,
    rectangleDivBackground138,
  ]);

  const rectangleDiv139Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius139,
      background: rectangleDivBackground139,
    };
  }, [rectangleDivBorderRadius139, rectangleDivBackground139]);

  const rectangleDiv140Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius140,
      background: rectangleDivBackground140,
    };
  }, [rectangleDivBorderRadius140, rectangleDivBackground140]);

  const rectangleDiv141Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius141,
      background: rectangleDivBackground141,
    };
  }, [rectangleDivBorderRadius141, rectangleDivBackground141]);

  const rectangleDiv142Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius142,
      background: rectangleDivBackground142,
    };
  }, [rectangleDivBorderRadius142, rectangleDivBackground142]);

  const rectangleDiv143Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius143,
      background: rectangleDivBackground143,
    };
  }, [rectangleDivBorderRadius143, rectangleDivBackground143]);

  const rectangleDiv144Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius144,
      background: rectangleDivBackground144,
    };
  }, [rectangleDivBorderRadius144, rectangleDivBackground144]);

  const rectangleDiv145Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius145,
      background: rectangleDivBackground145,
    };
  }, [rectangleDivBorderRadius145, rectangleDivBackground145]);

  const rectangleDiv146Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius146,
      background: rectangleDivBackground146,
    };
  }, [rectangleDivBorderRadius146, rectangleDivBackground146]);

  const rectangleDiv147Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius147,
      background: rectangleDivBackground147,
    };
  }, [rectangleDivBorderRadius147, rectangleDivBackground147]);

  const rectangleDiv148Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius148,
      background: rectangleDivBackground148,
    };
  }, [rectangleDivBorderRadius148, rectangleDivBackground148]);

  const rectangleDiv149Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius149,
      background: rectangleDivBackground149,
    };
  }, [rectangleDivBorderRadius149, rectangleDivBackground149]);

  const rectangleDiv150Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius150,
      height: rectangleDivHeight48,
      top: rectangleDivTop48,
      bottom: rectangleDivBottom48,
      background: rectangleDivBackground150,
    };
  }, [
    rectangleDivBorderRadius150,
    rectangleDivHeight48,
    rectangleDivTop48,
    rectangleDivBottom48,
    rectangleDivBackground150,
  ]);

  const rectangleDiv151Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius151,
      height: rectangleDivHeight49,
      top: rectangleDivTop49,
      bottom: rectangleDivBottom49,
      background: rectangleDivBackground151,
    };
  }, [
    rectangleDivBorderRadius151,
    rectangleDivHeight49,
    rectangleDivTop49,
    rectangleDivBottom49,
    rectangleDivBackground151,
  ]);

  const rectangleDiv152Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius152,
      height: rectangleDivHeight50,
      top: rectangleDivTop50,
      bottom: rectangleDivBottom50,
      background: rectangleDivBackground152,
    };
  }, [
    rectangleDivBorderRadius152,
    rectangleDivHeight50,
    rectangleDivTop50,
    rectangleDivBottom50,
    rectangleDivBackground152,
  ]);

  const rectangleDiv153Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius153,
      height: rectangleDivHeight51,
      top: rectangleDivTop51,
      bottom: rectangleDivBottom51,
      background: rectangleDivBackground153,
    };
  }, [
    rectangleDivBorderRadius153,
    rectangleDivHeight51,
    rectangleDivTop51,
    rectangleDivBottom51,
    rectangleDivBackground153,
  ]);

  const rectangleDiv154Style: CSSProperties = useMemo(() => {
    return {
      right: rectangleDivRight4,
      borderRadius: rectangleDivBorderRadius154,
      height: rectangleDivHeight52,
      top: rectangleDivTop52,
      bottom: rectangleDivBottom52,
      background: rectangleDivBackground154,
    };
  }, [
    rectangleDivRight4,
    rectangleDivBorderRadius154,
    rectangleDivHeight52,
    rectangleDivTop52,
    rectangleDivBottom52,
    rectangleDivBackground154,
  ]);

  const rectangleDiv155Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius155,
      height: rectangleDivHeight53,
      top: rectangleDivTop53,
      bottom: rectangleDivBottom53,
      background: rectangleDivBackground155,
    };
  }, [
    rectangleDivBorderRadius155,
    rectangleDivHeight53,
    rectangleDivTop53,
    rectangleDivBottom53,
    rectangleDivBackground155,
  ]);

  const rectangleDiv156Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius156,
      height: rectangleDivHeight54,
      top: rectangleDivTop54,
      bottom: rectangleDivBottom54,
      background: rectangleDivBackground156,
    };
  }, [
    rectangleDivBorderRadius156,
    rectangleDivHeight54,
    rectangleDivTop54,
    rectangleDivBottom54,
    rectangleDivBackground156,
  ]);

  const rectangleDiv157Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius157,
      height: rectangleDivHeight55,
      top: rectangleDivTop55,
      bottom: rectangleDivBottom55,
      background: rectangleDivBackground157,
    };
  }, [
    rectangleDivBorderRadius157,
    rectangleDivHeight55,
    rectangleDivTop55,
    rectangleDivBottom55,
    rectangleDivBackground157,
  ]);

  const rectangleDiv158Style: CSSProperties = useMemo(() => {
    return {
      left: rectangleDivLeft8,
      borderRadius: rectangleDivBorderRadius158,
      background: rectangleDivBackground158,
    };
  }, [
    rectangleDivLeft8,
    rectangleDivBorderRadius158,
    rectangleDivBackground158,
  ]);

  const rectangleDiv159Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius159,
      background: rectangleDivBackground159,
    };
  }, [rectangleDivBorderRadius159, rectangleDivBackground159]);

  const rectangleDiv160Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius160,
      height: rectangleDivHeight56,
      top: rectangleDivTop56,
      bottom: rectangleDivBottom56,
      background: rectangleDivBackground160,
    };
  }, [
    rectangleDivBorderRadius160,
    rectangleDivHeight56,
    rectangleDivTop56,
    rectangleDivBottom56,
    rectangleDivBackground160,
  ]);

  const rectangleDiv161Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius161,
      height: rectangleDivHeight57,
      top: rectangleDivTop57,
      bottom: rectangleDivBottom57,
      background: rectangleDivBackground161,
    };
  }, [
    rectangleDivBorderRadius161,
    rectangleDivHeight57,
    rectangleDivTop57,
    rectangleDivBottom57,
    rectangleDivBackground161,
  ]);

  const rectangleDiv162Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius162,
      height: rectangleDivHeight58,
      top: rectangleDivTop58,
      bottom: rectangleDivBottom58,
      background: rectangleDivBackground162,
    };
  }, [
    rectangleDivBorderRadius162,
    rectangleDivHeight58,
    rectangleDivTop58,
    rectangleDivBottom58,
    rectangleDivBackground162,
  ]);

  const rectangleDiv163Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius163,
      height: rectangleDivHeight59,
      top: rectangleDivTop59,
      bottom: rectangleDivBottom59,
      background: rectangleDivBackground163,
    };
  }, [
    rectangleDivBorderRadius163,
    rectangleDivHeight59,
    rectangleDivTop59,
    rectangleDivBottom59,
    rectangleDivBackground163,
  ]);

  const rectangleDiv164Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius164,
      height: rectangleDivHeight60,
      top: rectangleDivTop60,
      bottom: rectangleDivBottom60,
      background: rectangleDivBackground164,
    };
  }, [
    rectangleDivBorderRadius164,
    rectangleDivHeight60,
    rectangleDivTop60,
    rectangleDivBottom60,
    rectangleDivBackground164,
  ]);

  const rectangleDiv165Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius165,
      height: rectangleDivHeight61,
      top: rectangleDivTop61,
      bottom: rectangleDivBottom61,
      background: rectangleDivBackground165,
    };
  }, [
    rectangleDivBorderRadius165,
    rectangleDivHeight61,
    rectangleDivTop61,
    rectangleDivBottom61,
    rectangleDivBackground165,
  ]);

  const rectangleDiv166Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius166,
      height: rectangleDivHeight62,
      top: rectangleDivTop62,
      bottom: rectangleDivBottom62,
      background: rectangleDivBackground166,
    };
  }, [
    rectangleDivBorderRadius166,
    rectangleDivHeight62,
    rectangleDivTop62,
    rectangleDivBottom62,
    rectangleDivBackground166,
  ]);

  const rectangleDiv167Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius167,
      height: rectangleDivHeight63,
      top: rectangleDivTop63,
      bottom: rectangleDivBottom63,
      background: rectangleDivBackground167,
    };
  }, [
    rectangleDivBorderRadius167,
    rectangleDivHeight63,
    rectangleDivTop63,
    rectangleDivBottom63,
    rectangleDivBackground167,
  ]);

  const rectangleDiv168Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius168,
      background: rectangleDivBackground168,
    };
  }, [rectangleDivBorderRadius168, rectangleDivBackground168]);

  const rectangleDiv169Style: CSSProperties = useMemo(() => {
    return {
      left: rectangleDivLeft9,
      borderRadius: rectangleDivBorderRadius169,
      background: rectangleDivBackground169,
    };
  }, [
    rectangleDivLeft9,
    rectangleDivBorderRadius169,
    rectangleDivBackground169,
  ]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      position: divPosition,
      height: divHeight,
      width: divWidth,
      top: divTop,
      right: divRight,
      bottom: divBottom,
      left: divLeft,
    };
  }, [divPosition, divHeight, divWidth, divTop, divRight, divBottom, divLeft]);

  return (
    <div className={styles.audio} style={audioStyle}>
      <div className={styles.div} style={divStyle}>
        <div className={styles.child} style={rectangleDivStyle} />
        <div className={styles.item} style={rectangleDiv1Style} />
        <div className={styles.inner} style={rectangleDiv2Style} />
        <div className={styles.rectangleDiv} style={rectangleDiv3Style} />
        <div className={styles.child1} style={rectangleDiv4Style} />
        <div className={styles.child2} style={rectangleDiv5Style} />
        <div className={styles.child3} style={rectangleDiv6Style} />
        <div className={styles.child4} style={rectangleDiv7Style} />
        <div className={styles.child5} style={rectangleDiv8Style} />
        <div className={styles.child6} style={rectangleDiv9Style} />
      </div>
      <div className={styles.div1}>
        <div className={styles.child} style={rectangleDiv10Style} />
        <div className={styles.item} style={rectangleDiv11Style} />
        <div className={styles.inner} style={rectangleDiv12Style} />
        <div className={styles.rectangleDiv} style={rectangleDiv13Style} />
        <div className={styles.child1} style={rectangleDiv14Style} />
        <div className={styles.child2} style={rectangleDiv15Style} />
        <div className={styles.child3} style={rectangleDiv16Style} />
        <div className={styles.child4} style={rectangleDiv17Style} />
        <div className={styles.child5} style={rectangleDiv18Style} />
        <div className={styles.child6} style={rectangleDiv19Style} />
      </div>
      <div className={styles.div2}>
        <div className={styles.child} style={rectangleDiv20Style} />
        <div className={styles.item} style={rectangleDiv21Style} />
        <div className={styles.inner} style={rectangleDiv22Style} />
        <div className={styles.rectangleDiv} style={rectangleDiv23Style} />
        <div className={styles.child1} style={rectangleDiv24Style} />
        <div className={styles.child2} style={rectangleDiv25Style} />
        <div className={styles.child3} style={rectangleDiv26Style} />
        <div className={styles.child4} style={rectangleDiv27Style} />
        <div className={styles.child5} style={rectangleDiv28Style} />
        <div className={styles.child6} style={rectangleDiv29Style} />
      </div>
      <div className={styles.div3}>
        <div className={styles.child27} style={rectangleDiv30Style} />
        <div className={styles.child28} style={rectangleDiv31Style} />
        <div className={styles.child29} style={rectangleDiv32Style} />
        <div className={styles.child30} style={rectangleDiv33Style} />
        <div className={styles.child31} style={rectangleDiv34Style} />
        <div className={styles.child32} style={rectangleDiv35Style} />
        <div className={styles.child33} style={rectangleDiv36Style} />
        <div className={styles.child34} style={rectangleDiv37Style} />
        <div className={styles.child5} style={rectangleDiv38Style} />
        <div className={styles.child6} style={rectangleDiv39Style} />
      </div>
      <div className={styles.div4}>
        <div className={styles.child27} style={rectangleDiv40Style} />
        <div className={styles.child28} style={rectangleDiv41Style} />
        <div className={styles.child29} style={rectangleDiv42Style} />
        <div className={styles.child30} style={rectangleDiv43Style} />
        <div className={styles.child31} style={rectangleDiv44Style} />
        <div className={styles.child32} style={rectangleDiv45Style} />
        <div className={styles.child33} style={rectangleDiv46Style} />
        <div className={styles.child34} style={rectangleDiv47Style} />
        <div className={styles.child5} style={rectangleDiv48Style} />
        <div className={styles.child6} style={rectangleDiv49Style} />
      </div>
      <div className={styles.div5}>
        <div className={styles.child27} style={rectangleDiv50Style} />
        <div className={styles.child28} style={rectangleDiv51Style} />
        <div className={styles.child29} style={rectangleDiv52Style} />
        <div className={styles.child30} style={rectangleDiv53Style} />
        <div className={styles.child31} style={rectangleDiv54Style} />
        <div className={styles.child32} style={rectangleDiv55Style} />
        <div className={styles.child33} style={rectangleDiv56Style} />
        <div className={styles.child34} style={rectangleDiv57Style} />
        <div className={styles.child5} style={rectangleDiv58Style} />
        <div className={styles.child6} style={rectangleDiv59Style} />
      </div>
      <div className={styles.div6}>
        <div className={styles.child57} style={rectangleDiv60Style} />
        <div className={styles.child58} style={rectangleDiv61Style} />
        <div className={styles.child59} style={rectangleDiv62Style} />
        <div className={styles.child60} style={rectangleDiv63Style} />
        <div className={styles.child61} style={rectangleDiv64Style} />
        <div className={styles.child62} style={rectangleDiv65Style} />
        <div className={styles.child63} style={rectangleDiv66Style} />
        <div className={styles.child64} style={rectangleDiv67Style} />
        <div className={styles.child5} style={rectangleDiv68Style} />
        <div className={styles.child6} style={rectangleDiv69Style} />
      </div>
      <div className={styles.div7}>
        <div className={styles.child57} style={rectangleDiv70Style} />
        <div className={styles.child58} style={rectangleDiv71Style} />
        <div className={styles.child59} style={rectangleDiv72Style} />
        <div className={styles.child60} style={rectangleDiv73Style} />
        <div className={styles.child61} style={rectangleDiv74Style} />
        <div className={styles.child62} style={rectangleDiv75Style} />
        <div className={styles.child63} style={rectangleDiv76Style} />
        <div className={styles.child64} style={rectangleDiv77Style} />
        <div className={styles.child5} style={rectangleDiv78Style} />
        <div className={styles.child6} style={rectangleDiv79Style} />
      </div>
      <div className={styles.div8}>
        <div className={styles.child57} style={rectangleDiv80Style} />
        <div className={styles.child58} style={rectangleDiv81Style} />
        <div className={styles.child59} style={rectangleDiv82Style} />
        <div className={styles.child60} style={rectangleDiv83Style} />
        <div className={styles.child61} style={rectangleDiv84Style} />
        <div className={styles.child62} style={rectangleDiv85Style} />
        <div className={styles.child63} style={rectangleDiv86Style} />
        <div className={styles.child64} style={rectangleDiv87Style} />
        <div className={styles.child5} style={rectangleDiv88Style} />
        <div className={styles.child6} style={rectangleDiv89Style} />
      </div>
      <div className={styles.div9}>
        <div className={styles.child27} style={rectangleDiv90Style} />
        <div className={styles.child28} style={rectangleDiv91Style} />
        <div className={styles.child29} style={rectangleDiv92Style} />
        <div className={styles.child30} style={rectangleDiv93Style} />
        <div className={styles.child31} style={rectangleDiv94Style} />
        <div className={styles.child32} style={rectangleDiv95Style} />
        <div className={styles.child33} style={rectangleDiv96Style} />
        <div className={styles.child34} style={rectangleDiv97Style} />
        <div className={styles.child5} style={rectangleDiv98Style} />
        <div className={styles.child6} style={rectangleDiv99Style} />
      </div>
      <div className={styles.div10}>
        <div className={styles.child27} style={rectangleDiv100Style} />
        <div className={styles.child28} style={rectangleDiv101Style} />
        <div className={styles.child29} style={rectangleDiv102Style} />
        <div className={styles.child30} style={rectangleDiv103Style} />
        <div className={styles.child31} style={rectangleDiv104Style} />
        <div className={styles.child32} style={rectangleDiv105Style} />
        <div className={styles.child33} style={rectangleDiv106Style} />
        <div className={styles.child34} style={rectangleDiv107Style} />
        <div className={styles.child5} style={rectangleDiv108Style} />
        <div className={styles.child6} style={rectangleDiv109Style} />
      </div>
      <div className={styles.div11}>
        <div className={styles.child27} style={rectangleDiv110Style} />
        <div className={styles.child28} style={rectangleDiv111Style} />
        <div className={styles.child29} style={rectangleDiv112Style} />
        <div className={styles.child30} style={rectangleDiv113Style} />
        <div className={styles.child31} style={rectangleDiv114Style} />
        <div className={styles.child32} style={rectangleDiv115Style} />
        <div className={styles.child33} style={rectangleDiv116Style} />
        <div className={styles.child34} style={rectangleDiv117Style} />
        <div className={styles.child5} style={rectangleDiv118Style} />
        <div className={styles.child6} style={rectangleDiv119Style} />
      </div>
      <div className={styles.div12}>
        <div className={styles.child27} style={rectangleDiv120Style} />
        <div className={styles.child28} style={rectangleDiv121Style} />
        <div className={styles.child29} style={rectangleDiv122Style} />
        <div className={styles.child30} style={rectangleDiv123Style} />
        <div className={styles.child31} style={rectangleDiv124Style} />
        <div className={styles.child32} style={rectangleDiv125Style} />
        <div className={styles.child33} style={rectangleDiv126Style} />
        <div className={styles.child34} style={rectangleDiv127Style} />
        <div className={styles.child5} style={rectangleDiv128Style} />
        <div className={styles.child6} style={rectangleDiv129Style} />
      </div>
      <div className={styles.div13}>
        <div className={styles.child27} style={rectangleDiv130Style} />
        <div className={styles.child28} style={rectangleDiv131Style} />
        <div className={styles.child29} style={rectangleDiv132Style} />
        <div className={styles.child30} style={rectangleDiv133Style} />
        <div className={styles.child31} style={rectangleDiv134Style} />
        <div className={styles.child32} style={rectangleDiv135Style} />
        <div className={styles.child33} style={rectangleDiv136Style} />
        <div className={styles.child34} style={rectangleDiv137Style} />
        <div className={styles.child5} style={rectangleDiv138Style} />
        <div className={styles.child6} style={rectangleDiv139Style} />
      </div>
      <div className={styles.div14}>
        <div className={styles.child27} style={rectangleDiv140Style} />
        <div className={styles.child28} style={rectangleDiv141Style} />
        <div className={styles.child29} style={rectangleDiv142Style} />
        <div className={styles.child30} style={rectangleDiv143Style} />
        <div className={styles.child31} style={rectangleDiv144Style} />
        <div className={styles.child32} style={rectangleDiv145Style} />
        <div className={styles.child33} style={rectangleDiv146Style} />
        <div className={styles.child34} style={rectangleDiv147Style} />
        <div className={styles.child5} style={rectangleDiv148Style} />
        <div className={styles.child6} style={rectangleDiv149Style} />
      </div>
      <div className={styles.div15}>
        <div className={styles.child147} style={rectangleDiv150Style} />
        <div className={styles.child148} style={rectangleDiv151Style} />
        <div className={styles.child149} style={rectangleDiv152Style} />
        <div className={styles.child150} style={rectangleDiv153Style} />
        <div className={styles.child151} style={rectangleDiv154Style} />
        <div className={styles.child152} style={rectangleDiv155Style} />
        <div className={styles.child153} style={rectangleDiv156Style} />
        <div className={styles.child154} style={rectangleDiv157Style} />
        <div className={styles.child5} style={rectangleDiv158Style} />
        <div className={styles.child6} style={rectangleDiv159Style} />
      </div>
      <div className={styles.div16}>
        <div className={styles.child147} style={rectangleDiv160Style} />
        <div className={styles.child148} style={rectangleDiv161Style} />
        <div className={styles.child149} style={rectangleDiv162Style} />
        <div className={styles.child150} style={rectangleDiv163Style} />
        <div className={styles.child151} style={rectangleDiv164Style} />
        <div className={styles.child152} style={rectangleDiv165Style} />
        <div className={styles.child153} style={rectangleDiv166Style} />
        <div className={styles.child154} style={rectangleDiv167Style} />
        <div className={styles.child5} style={rectangleDiv168Style} />
        <div className={styles.child6} style={rectangleDiv169Style} />
      </div>
    </div>
  );
};

export default Audio1;
