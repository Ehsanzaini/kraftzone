import React from "react";

import { Header, Services } from "../components";
import {
  ServiceHero,
  ServiceContact,
  WashmachineDisposalInfo,
} from "../components/services/";

function ElectronicDisposal() {
  return (
    <>
      <section id="startseite"><ServiceHero /></section>
      <WashmachineDisposalInfo />
      <section id="kontakt">{<ServiceContact />}</section>
      <section id="leistungen"><Services /></section>
    </>
  );
}

export default ElectronicDisposal;
