import React from "react";
import "./DataAPIFormatting.css";
import uuid from "uuid/index";

export const dataTimeFormatting = timeString => {
  return `${timeString.slice(-6, -4)}:${timeString.slice(-4, -2)}`;
};

export const dataDurationFormatting = durationTotal => {
  const totalHours = parseInt(durationTotal / 3600);
  const totalMin = () => {
    return parseInt(durationTotal / 60) - totalHours * 60;
  };

  return totalHours > 0
    ? `${totalHours} h ${totalMin() < 10 ? "0" + totalMin() : totalMin()} min`
    : `${totalMin()} min`;
};

export const dataPriceFormatting = priceTotal => {
  const priceFr = priceTotal.replace(".", ",");
  return `${priceFr} €`;
};

// "transportSections" it been named to represent "sections" array from the API
export const dataTransportFormatting = transportSections => {
  let id = 0;
  const infosFromTransportSections = transportSections.map(transport => {
    const key = uuid();
    if (transport.type && transport.type === "public_transport") {
      return {
        id: id++,
        key: key,
        mode: transport.display_informations.commercial_mode, // expl. "RER"
        code: transport.display_informations.code, // expl. "C"
        colorCode: transport.display_informations.color, // expl. "FCD946"
        fontColor: transport.display_informations.text_color //expl. "FFFFFF"
      };
    } else if (
      transport.type &&
      (transport.type === "crow_fly" || transport.type === "street_network")
    ) {
      return {
        id: id++,
        key: key,
        mode: "Walking", //transport.mode : "walking"
        duration: transport.duration
      };
    } else if (
      transport.type &&
      transport.type === "transfer" &&
      transport.transfer_type === "walking"
    ) {
      return { id: id++, key: key, typeJourneySection: "Correspondance" };
    } else if (transport.type && transport.type === "waiting") {
      return { id: id++, key: key, waitingTime: transport.duration };
    } else {
      return {};
    }
  });

  return infosFromTransportSections.map(infos => {
    return (
      <span key={infos.key} className="transportMode">
        {infos.mode && infos.id > 0 ? (
          <>
            <span className="puce"></span> {infos.mode}
            <span
              style={{
                backgroundColor: infos.colorCode,
                color: infos.fontColor
              }}
            >
              {" "}
              {infos.code}
            </span>
          </>
        ) : infos.mode && infos.id === 0 ? (
          <>
            {" "}
            {infos.mode}
            <span
              style={{
                backgroundColor: infos.colorCode,
                color: infos.fontColor
              }}
            >
              {" "}
              {infos.code}
            </span>
          </>
        ) : (
          <></>
        )}
      </span>
    );
  });
};
