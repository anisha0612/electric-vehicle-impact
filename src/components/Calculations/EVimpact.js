// * EV Load Profile for the year
// *  EV consumes 0.3 kWh per mile
//  * Calculate EV load per year

// Assuming average power consumed by home per hour 0.93 kWh

// * Flat rate
// Flat Rate - Rate A is a flat $0.15/kWh

// *
//  TOU Rate - Rate B is a TOU rate of $0.20/kWh between noon and 6pm,
// and $0.08 / kWh otherwise

export const EVBill = (miles, rate, time) => {
  //  *  Flat Rate (Rate A)
  //   power consumed per hour for non - EV load is 0.93 kWh
  //   EV load profile per mile is 0.3 kWh

  let evLoadProfileFlat = 0.3 * miles;
  const nonEvLoadFlat = 0.93 * 8760;
  let totalBillFlat = 0.15 * (evLoadProfileFlat + nonEvLoadFlat);

  // * TOU Rate (Rate B)
  //  based on reference data power consumed by home between noon - 6pm and otherwise is 0.93 kWh
  // Rate $0.20/kWh between noon and 6pm
  // Rate for any other time is $0.08 / kWh

  // * Calculate the bill for the day based on the above data
  // non EV load profile

  const nonEvLoadTou = 0.2 * 0.93 + 0.08 * 0.93;

  // Calculate EV load profile with data EV miles per yer -
  // divide miles per year by 365 to get average miles per day
  // and multiply miles per day with power consumption 0.3 kWh

  let milesPerDay = miles / 365;
  let evLoadProfile = milesPerDay * 0.3;
  let totalBillTou;

  // if Ev is charged between noon to 6 pm rate applied is $0.20/kWh, otherwise $0.08 / kWh
  if (time === "noon") {
    totalBillTou = nonEvLoadTou + 0.2 * evLoadProfile;
  } else {
    totalBillTou = nonEvLoadTou + 0.08 * evLoadProfile;
  }

  return {
    flatBillTotal: totalBillFlat,
    touBillTotal: totalBillTou,
  };
};

export const FlatRateBill = () => {
  // average electric consumption 0.93 kWh
  // flat rate  $0.15/kWh
  // Load profile 8,760 per year (365 days * 24 hrs per day)

  // Returns  bill for the whole year
  return 0.15 * 0.93 * 8760;
};

export const TimeOfUseBill = () => {
  // based on reference data power consumed by home between noon - 6pm and otherwise is 0.93 kWh
  // Rate $0.20/kWh between noon and 6pm
  // Rate for any other time is $0.08 / kWh

  // * Calculate the bill for the day based on the above data and then calculate for the whole year
  const touBillPerDay = 0.2 * 0.93 + 0.08 * 0.93;

  // * Bill per year for TOU Rate is
  return touBillPerDay * 365;
};
