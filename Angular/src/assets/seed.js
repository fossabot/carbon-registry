module.exports = [
  {
    menuId: "GHG_Inventory",
    label: "GHG Inventory",
    url: "/GHG_Inventory",
    icon: null,
    isMain: true,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
  },
  // save ndc
  {
    menuId: "NDC_Actions",
    label: "NDC Actions",
    url: "/NDC_Actions",
    icon: null,
    isMain: true,
    children: [],
    isActive: true,
    isPermissionType: true,
    entity: "Project",
    group: "NDC ACTIONS",
    parentMenuId: "NDC_Actions",
    permissionMenuId: null,
  },

  {
    menuId: "Mitigation_Actions",
    label: "Mitigation Actions",
    url: "/Mitigation_Actions",
    icon: null,
    isMain: true,
    children: [],
    isActive: true,
    isPermissionType: true,
    group: "NDC ACTIONS",
  },
  {
    menuId: "Adaptation_Actions",
    label: "Adaptation Actions",
    url: "/Adaptation_Actions",
    icon: null,
    isMain: true,
    children: [],
    isActive: true,
    isPermissionType: true,
    group: "NDC ACTIONS",
  },
  {
    menuId: "Climate_Finance",
    label: "Climate Finance",
    url: "/Climate_Finance",
    icon: null,
    isMain: true,
    children: [],
    isActive: true,
    isPermissionType: true,
    group: "NDC ACTIONS",
  },
  {
    menuId: "SDG_Assessment",
    label: "SDG Assessment",
    url: "/SDG_Assessment",
    icon: null,
    isMain: true,
    children: [],
    isActive: true,
    isPermissionType: true,
    group: "NDC ACTIONS",
  },
  {
    menuId: "Database",
    label: "Database",
    url: "/Database",
    icon: null,
    isMain: true,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "NA",
  },
  {
    menuId: "Reports",
    label: "Reports",
    url: "/Reports",
    icon: null,
    isMain: true,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "NA",
  },
  {
    menuId: "User_List",
    label: "User List",
    url: "/UserList",
    icon: null,
    isMain: true,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "NA",
  },
  {
    menuId: "My_Approvals",
    label: "My Approvals",
    url: "/My_Approvals",
    icon: null,
    isMain: true,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "NA",
  },
  {
    menuId: "GHG_reports",
    label: "GHG reports",
    url: "/ghg-reports",
    icon: null,
    isMain: true,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "NA",
  },

  // adding childs 2nd phrase
  {
    menuId: "GHG_Energy",
    label: "Energy",
    url: "/ghg/energy",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: true,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_Inventory",
  },

  {
    menuId: "GHG_IPPU",
    label: "IPPU",
    url: "/ghg/IPPU",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: true,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_Inventory",
  },
  {
    menuId: "GHG_AFOLU",
    label: "AFOLU",
    url: "/ghg/AFOLU",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: true,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_Inventory",
  },

  {
    menuId: "GHG_Waste",
    label: "Waste",
    url: "/ghg/Waste",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: true,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_Inventory",
  },

  // Energy children starts
  {
    menuId: "GHG_Energy_Reference_Approach",
    label: "Reference Approach",
    url: "/ghg/energy/Reference_Approach",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    entity: "GHG INPUT>REFERENCE ENERGY",
    group: "GHG INVENTORY",
    parentMenuId: "GHG_Energy",
    permissionMenuId: "GHG_Energy",
  },
  {
    menuId: "GHG_Energy_Sectoral_Approach",
    label: "Sectoral Approach",
    url: "/ghg/energy/Sectoral_Approach",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_Energy",
  },
  //Energy_Sectoral_Approach children starts
  {
    menuId: "GHG_Energy_Sectoral_Approach_Energy_Industries",
    label: "Energy Industries",
    url: "/ghg/energy/Sectoral_Approach/Energy_Industries",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_Energy_Sectoral_Approach",
  },
  {
    menuId: "GHG_Energy_Sectoral_Approach_Manufacturing",
    label: "Manufacturing",
    url: "/ghg/energy/Sectoral_Approach/Manufacturing",
    entity: "GHG INPUT>ENERGY",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_Energy_Sectoral_Approach",
    permissionMenuId: "GHG_Energy",
  },
  {
    menuId: "GHG_Energy_Sectoral_Transport",
    label: "Transport",
    url: "/ghg/energy/Sectoral_Approach/Transport",
    entity: "GHG INPUT>ENERGY",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_Energy_Sectoral_Approach",
    permissionMenuId: "GHG_Energy",
  },
  {
    menuId: "GHG_Energy_Sectoral_Others",
    label: "Others",
    url: "/ghg/energy/Sectoral_Approach/Others",
    entity: "GHG INPUT>ENERGY",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_Energy_Sectoral_Approach",
    permissionMenuId: "GHG_Energy",
  },

  // children of Sectoral_Approach_Energy_Industries
  {
    menuId:
      "GHG_Energy_Sectoral_Approach_Energy_Industries_Electricity_Generation",
    label: "Electricity Generation",
    url: "/ghg/energy/Sectoral_Approach/Energy_Industries/Electricity_Generation",
    entity: "GHG INPUT>ENERGY",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_Energy_Sectoral_Approach_Energy_Industries",
    permissionMenuId: "GHG_Energy",
  },
  {
    menuId:
      "GHG_Energy_Sectoral_Approach_Energy_Industries_Production_Solid_Fuels",
    label: "Production of Solid Fuels",
    url: "/ghg/energy/Sectoral_Approach/Energy_Industries/Production_Solid_Fuels",
    entity: "GHG INPUT>SOLID FUEL",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_Energy_Sectoral_Approach_Energy_Industries",
    permissionMenuId: "GHG_Energy",
  },

  // children of IPPU
  {
    menuId: "GHG_IPPU_Mineral_Industry",
    label: "Mineral Industry",
    url: "/ghg/ippu/Mineral_Industry",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_IPPU",
  },
  {
    menuId: "GHG_IPPU_Non_Energy_product",
    label: "Non - Energy Products from Fuels and Solvent Use",
    url: "/ghg/ippu/Non_Energy_product",

    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_IPPU",
  },
  {
    menuId: "GHG_IPPU_Product_Substitutes",
    label: "Product Uses as Substitutes for Ozone Depleting Substances",
    url: "/ghg/ippu/Product_Substitutes",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_IPPU",
  },

  // child of GHG_IPPU_Mineral_Industry
  {
    menuId: "GHG_IPPU_Mineral_Industry_Cement_Production",
    label: "Cement Production",
    url: "/ghg/ippu/Mineral_Industry/Cement_Production",
    entity: "GHG INPUT>CEMENT",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_IPPU_Mineral_Industry",
    permissionMenuId: "GHG_IPPU",
  },
  {
    menuId: "GHG_IPPU_Mineral_Industry_Lime_Production",
    label: "Lime Production",
    url: "/ghg/ippu/Mineral_Industry/Lime_Production",
    entity: "GHG INPUT>LIME",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_IPPU_Mineral_Industry",
    permissionMenuId: "GHG_IPPU",
  },

  // child of GHG_IPPU_Non_Energy_product
  {
    menuId: "GHG_IPPU_Non_Energy_product_Lubricant_Use",
    label: "Lubricant Use",
    url: "/ghg/ippu/Non_Energy_product/Lubricant_Use",
    entity: "GHG INPUT>LUBRICANT",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_IPPU_Non_Energy_product",
    permissionMenuId: "GHG_IPPU",
  },
  {
    menuId: "GHG_IPPU_Non_Energy_product_Solvent_Use",
    label: "Solvent Use",
    url: "/ghg/ippu/Non_Energy_product/Solvent_Use",
    entity: "GHG INPUT>SOLVENT USE",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_IPPU_Non_Energy_product",
    permissionMenuId: "GHG_IPPU",
  },
  {
    menuId: "GHG_IPPU_Product_Substitutes_Refrigeration_Air",
    label: "Refrigeration and Air Conditioning",
    url: "/ghg/ippu/Product_Substitutes/Refrigeration_Air",
    entity: "GHG INPUT>REFRIGERATION",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_IPPU_Product_Substitutes",
    permissionMenuId: "GHG_IPPU",
  },
  //Child of AFOLU
  {
    menuId: "GHG_AFOLU_Livestock",
    label: "Livestock",
    url: "/ghg/AFOLU/Livestock",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_AFOLU",
  },
  {
    menuId: "GHG_AFOLU_Land",
    label: "Land",
    url: "/ghg/AFOLU/Land",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_AFOLU",
  },
  {
    menuId: "GHG_AFOLU_Aggregate_nonCO2",
    label: "Aggregate Sources & non-CO2 Emissions Sources on Land",
    url: "/ghg/AFOLU/Aggregate_nonCO2",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_AFOLU",
  },
  {
    menuId: "GHG_AFOLU_Livestock_EntericFermentation",
    label: "Enteric Fermentation",
    url: "/ghg/AFOLU/Livestock/EntericFermentation",
    entity: "GHG INPUT>ENTERIC FERMENTATION",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_AFOLU_Livestock",
    permissionMenuId: "GHG_AFOLU",
  },
  {
    menuId: "GHG_AFOLU_Livestock_ManureManagement",
    label: "Manure Management",
    url: "/ghg/AFOLU/Livestock/ManureManagement",
    entity: "GHG INPUT>MANURE MANAGEMENT",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_AFOLU_Livestock",
    permissionMenuId: "GHG_AFOLU",
  },
  {
    menuId: "GHG_AFOLU_Land_ForestLand",
    label: "Forest Land",
    url: "/ghg/AFOLU/Land/ForestLand",
    entity: "GHG INPUT>FOREST LAND",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_AFOLU_Land",
    permissionMenuId: "GHG_AFOLU",
  },
  {
    menuId: "GHG_AFOLU_Land_Cropland",
    label: "Cropland",
    url: "/ghg/AFOLU/Land/Cropland",
    entity: "GHG INPUT>CROPLAND",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_AFOLU_Land",
    permissionMenuId: "GHG_AFOLU",
  },
  {
    menuId: "GHG_AFOLU_Land_Grassland",
    label: "Grassland",
    url: "/ghg/AFOLU/Land/Grassland",
    entity: "GHG INPUT>GRASSLAND",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_AFOLU_Land",
    permissionMenuId: "GHG_AFOLU",
  },
  {
    menuId: "GHG_AFOLU_Land_Wetland",
    label: "Wetland",
    url: "/ghg/AFOLU/Land/Wetland",
    entity: "GHG INPUT>WETLANDS",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_AFOLU_Land",
    permissionMenuId: "GHG_AFOLU",
  },
  {
    menuId: "GHG_AFOLU_Land_Settlements",
    label: "Settlements",
    url: "/ghg/AFOLU/Land/Settlements",
    entity: "GHG INPUT>SETTLEMENTS",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_AFOLU_Land",
    permissionMenuId: "GHG_AFOLU",
  },
  {
    menuId: "GHG_AFOLU_Land_OtherLands",
    label: "OtherLands",
    url: "/ghg/AFOLU/Land/OtherLands",
    entity: "GHG INPUT>OTHER LAND",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_AFOLU_Land",
    permissionMenuId: "GHG_AFOLU",
  },
  {
    menuId: "GHG_AFOLU_Aggregate_nonCO2_Emissions_Biomass",
    label: "Emissions from Biomass Burning",
    url: "/ghg/AFOLU/Aggregate_nonCO2/Emissions_Biomass",
    entity: "GHG INPUT>BIOMASS BURNING",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_AFOLU_Aggregate_nonCO2",
  },
  {
    menuId: "GHG_AFOLU_Aggregate_nonCO2_Indirect_N2O",
    label: "Indirect N2O emissions from Manure Management",
    url: "/ghg/AFOLU/Aggregate_nonCO2/Indirect_N2O",
    entity: "GHG INPUT>INDIRECT N2O",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_AFOLU_Aggregate_nonCO2",
  },
  {
    menuId: "GHG_AFOLU_Aggregate_nonCO2_Rice_Cultivation",
    label: "Rice Cultivation",
    url: "/ghg/AFOLU/Aggregate_nonCO2/Rice_Cultivation",
    entity: "GHG INPUT>RICE",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_AFOLU_Aggregate_nonCO2",
  },
  {
    menuId: "GHG_Waste_Solid_Waste_Disposal",
    label: "Solid Waste Disposal",
    url: "/ghg/Waste/Solid_Waste_Disposal",
    entity: "GHG INPUT>SOLID WASTE DISPOSAL",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_Waste",
    permissionMenuId: "GHG_Waste",
  },
  {
    menuId: "GHG_Waste_Biological_Treatment_SolidWaste",
    label: "Biological Treatment of Solid Waste",
    url: "/ghg/Waste/Biological_Treatment_SolidWaste",
    entity: "GHG INPUT>BIOLOGICAL TREATEMENT",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_Waste",
    permissionMenuId: "GHG_Waste",
  },
  {
    menuId: "GHG_Waste_Incineration_Waste",
    label: "Incineration and Open Burning of Waste",
    url: "/ghg/Waste/Incineration_Waste",
    entity: "GHG INPUT>INCINERATION",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_Waste",
    permissionMenuId: "GHG_Waste",
  },
  {
    menuId: "GHG_Waste_Wastewater_Treatment_Discharge",
    label: "Wastewater Treatment and Discharge",
    url: "/ghg/Waste/Wastewater_Treatment_Discharge",
    entity: "GHG INPUT>WASTE WATER",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "GHG INVENTORY",
    parentMenuId: "GHG_Waste",
    permissionMenuId: "GHG_Waste",
  },

  // Mitigation action child
  {
    menuId: "Mitigation_Actions_ProjectInformation",
    label: "Project Information",
    url: "/Mitigation_Actions/ProjectInformation",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    entity: "MITIGATION INPUT",
    group: "NDC ACTIONS",
    parentMenuId: "Mitigation_Actions",
    permissionMenuId: "Mitigation_Actions",
  },
  {
    menuId: "Mitigation_Actions_MonitoringInformation",
    label: "Monitoring Information",
    url: "/Mitigation_Actions/MonitoringInformation",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    entity: "MITIGATION MONITORING",
    group: "NDC ACTIONS",
    parentMenuId: "Mitigation_Actions",
    permissionMenuId: "Mitigation_Actions",
  },
  {
    menuId: "Adaptation_Actions_ProjectInformation",
    label: "Project Information",
    url: "/Adaptation_Actions/ProjectInformation",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    entity: "ADAPTATION INPUT",
    isPermissionType: false,
    group: "NDC ACTIONS",
    parentMenuId: "Adaptation_Actions",
    permissionMenuId: "Adaptation_Actions",
  },
  {
    menuId: "Adaptation_Actions_MonitoringInformation",
    label: "Monitoring Information",
    url: "/Adaptation_Actions/MonitoringInformation",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    entity: "ADAPTATION MONITORING",
    isPermissionType: false,
    group: "NDC ACTIONS",
    parentMenuId: "Adaptation_Actions",
    permissionMenuId: "Adaptation_Actions",
  },
  {
    menuId: "Climate_Finance_ProjectInformation",
    label: "Project Information",
    url: "/Climate_Finance/ProjectInformation",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    entity: "FINANCE INPUT",
    isPermissionType: false,
    group: "NDC ACTIONS",
    parentMenuId: "Climate_Finance",
    permissionMenuId: "Climate_Finance",
  },
  {
    menuId: "Climate_Finance_MonitoringInformation",
    label: "Monitoring Information",
    url: "/Climate_Finance/MonitoringInformation",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    entity: "FINANCE MONITORING",
    isPermissionType: false,
    group: "NDC ACTIONS",
    parentMenuId: "Climate_Finance",
    permissionMenuId: "Climate_Finance",
  },
  {
    menuId: "SDG_Assessment_ProjectInformation",
    label: "Project Information",
    url: "/SDG_Assessment/ProjectInformation",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    entity: "SDG INPUT",
    isPermissionType: false,
    group: "NDC ACTIONS",
    parentMenuId: "SDG_Assessment",
    permissionMenuId: "SDG_Assessment",
  },
  {
    menuId: "SDG_Assessment_MonitoringInformation",
    label: "Monitoring Information",
    url: "/SDG_Assessment/MonitoringInformation",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    entity: "SDG MONITORING",
    isPermissionType: false,
    group: "NDC ACTIONS",
    parentMenuId: "SDG_Assessment",
    permissionMenuId: "SDG_Assessment",
  },
  // Database child
  {
    menuId: "Database_Energy",
    label: "Energy",
    url: "/Database/Energy",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "NA",
    parentMenuId: "Database",
  },
  {
    menuId: "Database_IPPU",
    label: "IPPU",
    url: "/Database/IPPU",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "NA",
    parentMenuId: "Database",
  },
  {
    menuId: "Database_AFOLU",
    label: "AFOLU",
    url: "/Database/AFOLU",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "NA",
    parentMenuId: "Database",
  },
  {
    menuId: "Database_Waste",
    label: "Waste",
    url: "/Database/Waste",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "NA",
    parentMenuId: "Database",
  },
  {
    menuId: "Database_Energy_EmissionFactor",
    label: "Emission Factor - Fuel",
    url: "/Database/Energy/EmissionFactor",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "NA",
    parentMenuId: "Database_Energy",
    permissionMenuId: "Database_Energy",
  },
  {
    menuId: "Database_IPPU_EmissionFactor",
    label: "Emission Factor - IPPU",
    url: "/Database/IPPU/EmissionFactor",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "NA",
    parentMenuId: "Database_IPPU",
    permissionMenuId: "Database_IPPU",
  },
  {
    menuId: "Database_IPPU_GWPDatabase",
    label: "GWP Database",
    url: "/Database/IPPU/GWPDatabase",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "NA",
    parentMenuId: "Database_IPPU",
    permissionMenuId: "Database_IPPU",
  },
  {
    menuId: "Database_AFOLU_LivestockPopulation",
    label: "Livestock Population",
    url: "/Database/AFOLU/LivestockPopulation",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "NA",
    parentMenuId: "Database_AFOLU",
    permissionMenuId: "Database_AFOLU",
  },
  {
    menuId: "Database_AFOLU_EmissionFactor",
    label: "Emission Factor - Livestock",
    url: "/Database/AFOLU/EmissionFactor",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "NA",
    parentMenuId: "Database_AFOLU",
    permissionMenuId: "Database_AFOLU",
  },
  {
    menuId: "Database_Waste_Population",
    label: "Population",
    url: "/Database/Waste/Population",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "NA",
    parentMenuId: "Database_Waste",
    permissionMenuId: "Database_Waste",
  },

  // reports child
  {
    menuId: "Reports_GHGInventory",
    label: "GHG Inventory",
    url: "/Reports/GHGInventory",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: true,
    group: "REPORTS",
    parentMenuId: "Reports",
  },
  {
    menuId: "Reports_MitigationTracking",
    label: "Mitigation Tracking",
    url: "/Reports/MitigationTracking",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: true,
    group: "REPORTS",
    parentMenuId: "Reports",
  },
  {
    menuId: "Reports_AdaptationTracking",
    label: "Adaptation Tracking",
    url: "/Reports/AdaptationTracking",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: true,
    group: "REPORTS",
    parentMenuId: "Reports",
  },
  {
    menuId: "Reports_FinanceTracking",
    label: "Finance Tracking",
    url: "/Reports/FinanceTracking",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: true,
    group: "REPORTS",
    parentMenuId: "Reports",
  },
  {
    menuId: "Reports_SDGTracking",
    label: "SDG Tracking",
    url: "/Reports/SDGTracking",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: true,
    group: "REPORTS",
    parentMenuId: "Reports",
  },
  {
    menuId: "Reports_MRVTracking",
    label: "MRV Tracking",
    url: "/Reports/MRVTracking",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: true,
    group: "REPORTS",
    parentMenuId: "Reports",
  },
  {
    menuId: "Reports_GHGInventory_Yearwise",
    label: "GHG Inventory (Year wise)",
    url: "/Reports/GHGInventory/Yearwise",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "REPORTS",
    parentMenuId: "Reports_GHGInventory",
  },
  {
    menuId: "Reports_GHGInventory_Gaswise",
    label: "GHG Inventory (Gas wise)",
    url: "/Reports/GHGInventory/Gaswise",
    icon: null,
    isMain: false,
    children: [],
    isActive: true,
    isPermissionType: false,
    group: "REPORTS",
    parentMenuId: "Reports_GHGInventory",
  },
];