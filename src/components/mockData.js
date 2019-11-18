const mockData = [
  {
    departure_date_time: "20191105T140800",
    arrival_date_time: "20191105T144300",
    durations: { walking: 420, total: 2100 },
    sections: [
      {
        arrival_date_time: "20191106T154600",
        co2_emission: {},
        departure_date_time: "20191106T154119",
        duration: 281,
        from: {},
        geojson: {},
        id: "section_9_0",
        links: [],
        mode: "walking",
        path: [],
        to: {},
        type: "street_network"
      },
      {
        additional_informations: [],
        arrival_date_time: "20191106T154800",
        base_arrival_date_time: "20191106T154800",
        base_departure_date_time: "20191106T154600",
        co2_emission: {},
        data_freshness: "base_schedule",
        departure_date_time: "20191106T154600",
        display_informations: {
          code: "14",
          color: "67328E",
          commercial_mode: "Metro",
          description: "",
          direction: "Olympiades (Paris)",
          equipments: [],
          headsign: "Saint-Lazare",
          label: "14",
          links: [],
          name: "Olympiades - Gare Saint-Lazare",
          network: "RATP",
          physical_mode: "Métro",
          text_color: "FFFFFF"
        },
        duration: 120,
        from: {},
        geojson: {},
        id: "section_10_0",
        links: [],
        stop_date_times: [],
        to: {},
        type: "public_transport"
      },
      {
        arrival_date_time: "20191106T154800",
        co2_emission: {},
        departure_date_time: "20191106T154800",
        duration: 0,
        from: {},
        geojson: {},
        id: "section_11_0",
        links: [],
        to: {},
        transfer_type: "walking",
        type: "transfer"
      },
      {
        additional_informations: [],
        arrival_date_time: "20191106T160900",
        base_arrival_date_time: "20191106T160900",
        base_departure_date_time: "20191106T154800",
        co2_emission: {},
        data_freshness: "base_schedule",
        departure_date_time: "20191106T154800",
        display_informations: {
          code: "6",
          color: "79BB92",
          commercial_mode: "Metro",
          description: "",
          direction: "Charles de Gaulle — Étoile (Paris)",
          equipments: [],
          headsign: "Charles de Gaulle Etoile",
          label: "6",
          links: [],
          name: "Nation - Charles de Gaule Etoile",
          network: "RATP",
          physical_mode: "Métro",
          text_color: "000000"
        },
        duration: 1260,
        from: {},
        geojson: {},
        id: "section_12_0",
        links: [],
        stop_date_times: [],
        to: {},
        type: "public_transport"
      },
      {
        arrival_date_time: "20191106T161659",
        co2_emission: {},
        departure_date_time: "20191106T160900",
        duration: 479,
        from: {},
        geojson: {},
        id: "section_13_0",
        links: [],
        mode: "walking",
        path: [],
        to: {},
        type: "street_network"
      }
    ],

    fare: {
      found: true,
      total: { value: "1.90" }
    }
  },
  {
    departure_date_time: "20191105T141900",
    arrival_date_time: "20191105T145900",
    durations: { walking: 0, total: 2400 },
    sections: [],
    fare: {
      found: false,
      total: { value: "0.0" }
    }
  },
  {
    departure_date_time: "20191105T141200",
    arrival_date_time: "20191105T150100",
    durations: { walking: 0, total: 6540 },
    sections: [],
    fare: {
      found: true,
      total: { value: "1.90" }
    }
  }
];

export default mockData;
