import { DateTime } from 'luxon';

export enum ProgrammeStage {
  AwaitingAuthorization = 'Pending',
  Issued = 'Issued',
  Transferred = 'Transferred',
  Retired = 'Retired',
  Rejected = 'Rejected',
  // Frozen = 'Frozen',
}

export enum ProgrammeTransferStage {
  PROCESSING = 'Process',
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
  PENDING = 'Pending',
  // Frozen = 'Frozen',
}

export enum CreditTransferStage {
  Pending = 'Pending',
  Approved = 'Approved',
  Rejected = 'Rejected',
  Process = 'Process',
}

export enum TxType {
  CREATE = '0',
  REJECT = '1',
  ISSUE = '2',
  TRANSFER = '3',
  CERTIFY = '4',
  RETIRE = '5',
  REVOKE = '6',
  FREEZE = '7',
}

export enum SectoralScope {
  'Energy Industry' = '1',
  'Energy Distribution' = '2',
  'Agriculture' = '15',
}

export enum TypeOfMitigation {
  AGRICULTURE = 'Agriculture',
  SOLAR = 'Solar',
}

export const getStageEnumVal = (value: string) => {
  const index = Object.keys(ProgrammeStage).indexOf(value);
  if (index < 0) {
    return value;
  }
  return Object.values(ProgrammeStage)[index];
};

export const getStageTransferEnumVal = (value: string) => {
  const index = Object.keys(ProgrammeTransferStage).indexOf(value);
  if (index < 0) {
    return value;
  }
  return Object.values(ProgrammeTransferStage)[index];
};

export const getStageTagType = (stage: ProgrammeStage) => {
  switch (getStageEnumVal(stage)) {
    case ProgrammeStage.AwaitingAuthorization:
      return 'error';
    case ProgrammeStage.Issued:
      return 'processing';
    case ProgrammeStage.Transferred:
      return 'success';
    default:
      return 'default';
  }
};

export const getTransferStageTagType = (stage: ProgrammeTransferStage) => {
  switch (getStageEnumVal(stage)) {
    case ProgrammeTransferStage.REJECTED:
      return 'error';
    case ProgrammeTransferStage.PROCESSING:
      return 'success';
    case ProgrammeTransferStage.APPROVED:
      return 'processing';
    case ProgrammeTransferStage.PENDING:
      return 'success';
    default:
      return 'default';
  }
};

export enum CompanyRole {
  CERTIFIER = 'Certifier',
  PROGRAMME_DEVELOPER = 'ProgrammeDeveloper',
  MRV = 'MRV',
  GOVERNMENT = 'Government',
}

export interface ProgrammeProperties {
  maxInternationalTransferAmount: string;
  creditingPeriodInYears: number;
  programmeCostUSD: number;
  sourceOfFunding: any;
  grantEquivalentAmount: number;
  carbonPriceUSDPerTon: number;
  buyerCountryEligibility: string;
  geographicalLocation: string[];
  greenHouseGasses: any[];
  creditYear: number;
  programmeMaterials: string;
  projectMaterial: string;
}

export interface Programme {
  programmeId: string;
  serialNo: string;
  title: string;
  sectoralScope: string;
  sector: string;
  countryCodeA2: string;
  currentStage: ProgrammeStage;
  startTime: number;
  endTime: number;
  creditChange: number;
  creditIssued: number;
  creditBalance: number;
  creditTransferred: number;
  creditRetired: number;
  creditFrozen: number[];
  constantVersion: string;
  proponentTaxVatId: string[];
  companyId: number[];
  proponentPercentage: number[];
  creditOwnerPercentage: number[];
  certifierId: any[];
  certifier: any[];
  company: any[];
  creditUnit: string;
  programmeProperties: ProgrammeProperties;
  agricultureProperties: any;
  solarProperties: any;
  txTime: number;
  createdTime: number;
  txRef: string;
  typeOfMitigation: TypeOfMitigation;
}

export const getGeneralFields = (programme: Programme) => {
  return {
    title: programme.title,
    serialNo: programme.serialNo,
    currentStatus: programme.currentStage,
    applicationType: 'Programme Developer',
    sector: programme.sector,
    sectoralScope:
      Object.keys(SectoralScope)[
        Object.values(SectoralScope).indexOf(programme.sectoralScope as SectoralScope)
      ],
    startDate: DateTime.fromSeconds(Number(programme.startTime)),
    endDate: DateTime.fromSeconds(Number(programme.endTime)),
    buyerCountry: programme.programmeProperties.buyerCountryEligibility,
  };
};

export const addCommSep = (value: any) => {
  return Number(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const addSpaces = (text: string) => {
  if (!text) {
    return text;
  }
  return text.replace(/([A-Z])/g, ' $1').trim();
};

export const getFinancialFields = (programme: Programme) => {
  return {
    programmeCost: addCommSep(programme.programmeProperties.programmeCostUSD),
    financingType: addSpaces(programme.programmeProperties.sourceOfFunding),
    grantEquivalent: addCommSep(programme.programmeProperties.grantEquivalentAmount),
    carbonPrice: addCommSep(programme.programmeProperties.carbonPriceUSDPerTon),
  };
};