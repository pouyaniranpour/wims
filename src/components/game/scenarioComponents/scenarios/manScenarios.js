export const man = [
/* ============================================================================================== */
/*               Important: This hasn't been formatted and will make the game crash               */
/* ============================================================================================== */  
  {
    id: "start",
    text: `You have been laid off from a big company as part of a restructure. You can't find work easily and the bills are mounting up. Your wife is working as a teacher, but it isn't enough to support a family. A mate offers you some building cash jobs under the table. Do you accept his offer?`,
    choices: [
      { text: "Yes", nextScenario: "acceptOffer" },
      {
        text: "No",
        nextScenario: `refuseOfferRandom${Math.floor(Math.random() * 2) + 1}`,
      },
    ],
  },
  /* ======== Accept offer path ======= */
  {
    id: "acceptOffer",
    text: `You are working on a roof and fall off breaking your leg, hip and fracturing your back. Because you were paid under the table and your mate wasn't using proper safety equipment, he faces penalties and blames you. You're fixed up in hospital, but need surgery and are on a waitlist. Due to the injuries you can't work and are on painkillers 24/7.`,
    choices: [
      { text: "Next", nextScenario: "painAndAnxiety" },
    ],
  },
  {
    id: "painAndAnxiety",
    text: `The pain and anxiety you are feeling about supporting your family become too much. It doesn't feel like the painkillers are working, so you take more than recommended and also begin using alcohol to help you sleep. The doctor asks you to come in "for a chat." You can't afford to see your doctor and your prescription for painkillers ends.`,
    choices: [
      { text: "Next", nextScenario: "streetPainkillers" },
    ],
  },
  {
    id: "streetPainkillers",
    text: `You find someone willing to sell you a painkiller on the street. Your wife finds out and you have a big argument about that and how much alcohol you are drinking. She takes the kids and goes to live with her sister. You haven't been able to keep up with rent payments and your landlord asks you to leave.`,
    choices: [
      { text: "Live in your car", nextScenario: "carRandom2" },
      { text: "Stay with a friend", nextScenario: `stayWithFriendRandom${Math.floor(Math.random() * 2) + 1}` },
    ],
  },
  

  //Stay with a friend path #1 from where you are evicted by the landlord
  {
    id: "stayWithFriendRandom1",
    text: `Your friend is happy to have you for a while. He was expecting you would get work, but now he finds out about the painkillers. You borrow money from him and then then he says he can't lend more and he thinks you have a problem. Why not ask Work and Income for help.`,
    choices: [
      { text: "Visit Work and Income", nextScenario: `visitMsdRandom${Math.floor(Math.random() * 2) + 1}` },//TODO both paths from this bubble
      { text: "Hope something turns up", nextScenario: "waitAndHope" }, //TODO
    ],
  },
      //Visit MSD #1 sub-path from staying with a friend
  {
    id: "visitMsdRandom1",
    text: `You have never been on a benefit before and you find it hard to ask for help at Work and Income. You are asked about your willingness to do any jobs - especially those involving physical labour. You explain about your injuries and they say you may be eligible for a Supported Living payment. You have to fill out some forms and see a doctor to get this. It is hard to keep repeating your story. The mix of painkillers and alcohol you are taking make it hard to get anything done and you don't follow up.`,
    choices: [
      { text: "Next", nextScenario: "evictedByFriend" },//TODO
    ],
  },
  {
    id: "evictedByFriend",
    text: `Your mate has had enough and says you have to leave and live somewhere else. There isn't anywhere except your car.`,
    choices: [
      { text: "Flip", nextScenario: `carRandom${Math.floor(Math.random() * 3) + 1}` },//TODO
    ],
  },
      //Visit MSD #2 sub-path from staying with a friend
  {
    id: "visitMsdRandom2",
    text: `You swallow your pride and go to Work and Income to ask for help. You are asked about your willingness to do any jobs - especially those involving physical labour. You explain about your injuries and may be eligible for a Supported Living payment.`,
    choices: [
      { text: "Next", nextScenario: "friendFillsForms" },
    ],
  },
  {
    id: "friendFillsForms",
    text: `Your friend helps you fill out the forms as you aren't functioning well due to the painkillers and alcohol you are taking to manage your pain. You friend suggests detox. Will you try it?`,
    choices: [
      { text: "Yes", nextScenario: "acceptDetox" },
      { text: "No", nextScenario: "refuseDetox" },
    ],
  },
  {
    id: "acceptDetox",
    text: `You are booked into the Social Detox facility at Auckland City Mission - Te Tāpui Atawhai. You go in and have access to counselling. After this, you will be referred to the CADS (Community Alcohol and Drug Service) who run support groups. You mention that you are living on your friend's couch and the detox service asks if you'd like the Mission to help.`,
    choices: [
      { text: "Next", nextScenario: "jamesListon1" },
    ],
  },
  {
    id: "refuseDetox", //TODO complete this pathway
    text: `You are worried that without the drugs and alcohol your pain will be unmanageable. You refuse.`,
    choices: [
      { text: "Next", nextScenario: "noOptionsLeft" },
    ],
  },
  {
    id: "jamesListon1", //TODO complete this pathway
    text: `You are offered a place at James Liston hostel run by the Mission. For twelve weeks you get the support you need to attend the CADS sessions and get your life back on track. The Mission help you find a place to live and support you to access healthcare. You get referred to a specialist and get the surgery and rehab you need to reduce your pain.`,
    choices: [
      { text: "Next", nextScenario: "communityHousingEnding" },
    ],
  },

  //Wait and hope something turns up sub-path
  {
    id: "waitAndHope",
    text: `Your decision making is impaired by pain and the pills and alcohol you are using to try to manage it. Nothing else turns up. Your friend has had enough. You come home to find all your possessions sitting outside the locked door.`,
    choices: [
      { text: "Next", nextScenario: "outOfOptions" },
    ],
  },
  {
    id: "outOfOptions",
    text: `You try asking other friends, but after seeing you live on your mutual friend's couch, your remaining friends tell you they can't help. Your family are supporting your wife and children and want nothing to do with you. You can't use this option again.`,
    choices: [
      { text: "Next", nextScenario: "livingInCar" },
    ],
  },
  {
    id: "livingInCar",
    text: `You can't afford petrol to drive anywhere, so you park the car on a suburban street near a public toilet. You put clothes and cardboard over the windows and try to be quiet. There's no shower at the toilets, but you can splash water over yourself and try to keep clean.`,
    choices: [
      { text: "Next", nextScenario: "carRandom1" },
    ],
  },
  //Living in car sub-path #1
  {
    id: "carRandom1",
    text: `The neighbours find the presence of someone living in their car unsightly. They ask you to move on. You move neighbourhoods, but after this happens a few times, someone calls the police.`,
    choices: [
      { text: "Next", nextScenario: "policeStopBy" },
    ],
  },
  {
    id: "policeStopBy",
    text: `The police stop by. After a kōrero, they refer you to Auckland City Mission - Te Tāpui Atawhai. At the Mission, a person meets with you and talks through your needs. They support you into transitional housing.`,
    choices: [
      { text: "Next", nextScenario: "jamesListon2" },
    ],
  },
  {
    id: "jamesListon2",
    text: `You are offered a place at James Liston Hostel run by the Mission. They take you to the Calder Health Centre to get help with your long-term injuries from the accident. The nurse refers you to a specialist and you get the surgery you need and start to heal. You also ask about getting help with alcohol and painkillers through the Mission's social detox service. Through this, you are introduced to CADS (Community Alcohol and Drug Services) and they help you with an ongoing support group.`,
    choices: [
      { text: "Next", nextScenario: "communityHousingEnding" },
    ],
  },
  //Living in car sub path #2
  {
    id: "carRandom2",
    text: `What car? You've already sold it.`,
    choices: [
      { text: "Next", nextScenario: "onStreet" },
    ],
  },
  {
    id: "onStreet",
    text: `You sit on the street. It gets dark. You hear some people and get worried. You hide in a bush overnight and have a sleepless night. In the morning you're exhausted and find a sunny private spot to sleep.`,
    choices: [
      { text: "Flip", nextScenario: `approachedRandom${Math.floor(Math.random() * 2) + 1}` },
    ],
  },
  {
    id: "approachedRandom1",
    text: `Someone jostles you awake and demands you move on, or they'll call the police. You walk around for a bit, but are very tired and hungry. You ask for money, but people ignore you. Someone gives you $10, but says they know you'll spend it on alcohol. You've heard about the Mission, should you try there?`,
    choices: [
      { text: "Yes", nextScenario: `jamesListon2` },
      { text: "No", nextScenario: `feelShameEnding` },
    ],
  },
  {
    id: "approachedRandom2",
    text: `Someone approaches you and it's a keyworker from the Outreach Team at the Mission. You don't expect much, but to your surprise they talk about the time they were on the street and how it doesn't have to be final. They offer you help and you take it.`,
    choices: [
      { text: "Next", nextScenario: `richardsStoryEnding` },
    ],
  },
 
  //Living in car sub path #3
  {
    id: "carRandom3",
    text: `After 4 weeks, the neighbours report you and you get a parking ticket. You can't pay it, but have enough petrol to move to a different suburb. You get another ticket. After twelve weeks of living in your car, the car won't start. You come out from the public toilets and discover your car has been towed along with all your possessions.`,
    choices: [
      { text: "Next", nextScenario: "distressNoticed" },
    ],
  },
  {
    id: "distressNoticed",
    text: `A member of the public walks past and notices your distress. She asks if she can help and ends up giving you some clothes, a sleeping bag and $50 cash. You are now a rough sleeper.`,
    choices: [
      { text: "Next", nextScenario: "library" },
    ],
  },
  {
    id: "library",
    text: `You develop a pattern of going to the public library in Auckland city. As long as you're quiet, they let you stay there and nap.`,
    choices: [
      { text: "Next", nextScenario: "approachedRandom2" },
    ],
  },

  //Stay with a friend path #2 from where you are evicted by the landlord
  {
    id: "stayWithFriendRandom2",
    text: `You ask around, but the only "mate who will have you is the one who got you the painkillers. You don't know what his intentions are, so you are unsure if it's safe to be there. But where else can you go? You move in and he offers you an easy way to get some money by working for him. You have to pick up and drop off packages. It's risky, but helps you to pay the bills.`,
    choices: [
      { text: "Next", nextScenario: "arrestedEnding" },
    ],
  },
  /* ====== Refuse Offer Path #1 ====== */
  {
    id: "refuseOfferRandom1",
    text: `You say no to the offer. You are concerned that if anything goes wrong with the job, your mate won't have proper insurances to protect everyone. You decide to seek help from your local Work and Income office.`,
    choices: [
      { text: "Next", nextScenario: "jobseekerSupport" },
    ],
  },
  {
    id: "jobseekerSupport",
    text: `You qualify for Jobseeker Support. With your wife's income, it's just enough to pay your rent and buy food. There is no extra for petrol, bus fares, kids activities, healthcare, or any holidays or luxuries. You are struggling to get a job, but an opportunity to retrain comes up. If you retrain, it will be in the farming sector and you may have to move out of the city.`,
    choices: [
      { text: "Yes", nextScenario: "retrainEnding" },
      { text: "No", nextScenario: "rootCanal" },
    ],
  },
  /* ====== Refuse Offer Path #2 ====== */
  {
    id: "refuseOfferRandom2",
    text: `You seek help from Work and Income and qualify for Jobseeker Support. Between you and your wife's income, it's just enough to pay your rent and buy food.`,
    choices: [
      { text: "Next", nextScenario: "rootCanal" },
    ],
  },
  {
    id: "rootCanal",
    text: `You've been ignoring a pain in your teeth and it becomes agonising, so you have to go to the dentist and it turns out you need a root canal. You get a loan from Work and Income. More urgent bills come and you apply for more loans, but you get rejected. You do get a job, but with taxes and other fees, you are taking home less than the Jobseeker Support payment. You and your wife move out and ask if you can live with your family to help the income go further.`,
    choices: [
      { text: "Next", nextScenario: "carBreakdown" },
    ],
  },
  {
    id: "carBreakdown",
    text: `Your car breaks down. You can't afford to repair it - what will you do?`,
    choices: [
      { text: "Get a loan", nextScenario: "loanSharks" },
      { text: "Borrow from family", nextScenario: "borrowFromFamily" },
    ],
  },
  //Get A Loan Path from where car breaks down
  {
    id: "loanSharks",
    text: `You get a loan from a place that says "no credit rating, no problem!" You aren't stupid - you know they are loan sharks, but you have no option, because you already have creditors including Work and Income. Sure enough, the $5,000 loan you get has a 24% interest rate and a large "set up fee." But it does mean you can fix the car. You add it to your debts.`,
    choices: [
      { text: "Next", nextScenario: "debtCollectors" },
    ],
  },
  {
    id: "debtCollectors",
    text: `The bills stack up and the debt collectors come knocking. They show up unannounced in black combat outfits, banging hard on the front door. The neighbours come out of their houses. Your family are terrified. They threaten to take the TV, exercise equipment and an game console from the house - but they belong to your extended family, not you. They say they'll be back, if you don't pay up. How will you pay?`,
    choices: [
      { text: "Next", nextScenario: "backToWinz" },
    ],
  },
  {
    id: "backToWinz",
    text: `You go back to Work and Income for help.`,
    choices: [
      { text: "Next", nextScenario: "financialMentor" },
    ],
  },
  {
    id: "financialMentor",
    text: `They recommend a financial mentor. At the appointment, they agree that "you can't budget with nothing." They will help you go through insolvency. You will still owe money to Work and Income and others, but the financial stress lifts and you won't get more harassment from debt agencies. You don't feel like you have any choice. Your family call you a "bludger" and a loser in front of your kids. You have to move out! You decide to call the Auckland City Mission.`,
    choices: [
      { text: "Next", nextScenario: "housingRegisterEnding" },
    ],
  },

  //Borrow from family path from where car breaks down
  {
    id: "borrowFromFamily",
    text: `You ask your extended family for a loan, but they can't afford it. It also causes tension among everyone. Your brother lets you use his car until you can afford to get yours fixed.`,
    choices: [
      { text: "Next", nextScenario: "brotherCarBreakdown" },
    ],
  },
  {
    id: "brotherCarBreakdown",
    text: `Your brother's car breaks down and he blames you. The household atmosphere becomes even worse and you know you all have to leave. But where can you go? A friend suggests you call the Mission but you aren't homeless - or are you?`,
    choices: [
      { text: "Yes", nextScenario: "admitHomelessness" },
      { text: "No", nextScenario: "denyHomelessness" },
    ],
  },
  {
    id: "admitHomelessness",
    text: `You face the fact that you are experiencing homelessness. It's a very dark feeling for you and your wife. You feel ashamed and don't want your kids growing up in this situation. You decide to ask the Mission for advice.`,
    choices: [
      { text: "Next", nextScenario: "housingRegisterEnding" },
    ],
  },
  {
    id: "denyHomelessness",
    text: `Yes, you are. The definition of homelessness in New Zealand is people living "without shelter, in temporary accommodation, sharing accommodation with a household, or living in uninhabitable housing." (Ministry of Housing and Urban Development)`,
    choices: [
      { text: "Next", nextScenario: "survivalModeEnding" },
    ],
  },
  /* ============= Endings ============ */
  {
    id: "retrainEnding",
    text: `After retraining in the farming sector you get a job and leave the city with your family. Your wife can work as a teacher at the local primary school. You're not making your fortune, but your family has what they need to thrive.`,
    choices: [
      { text: ">>", nextScenario: `` },
    ],
  },
  {
    id: "housingRegisterEnding",
    text: `The Mission are able to assist you with food parcels and refer you to another agency who provide emergency accommodation to families with children. Because you are a family, you are given priority in the system and you receive support to get on the Housing Register towards a permanent home. Things are looking up for you.`,
    choices: [
      { text: ">>", nextScenario: `` },
    ],
  },
  {
    id: "survivalModeEnding",
    text: `Living with family in an overcrowded room because you have nowhere else to go is experiencing homelessness, but you are too ashamed to seek help. You keep trying to get a job, but are struggling. Affording transport is a constant worry. You're stuck in survival mode.`,
    choices: [
      { text: ">>", nextScenario: `` },
    ],
  },
  {
    id: "arrestedEnding",
    text: `Soon the work you've done for this guy gets you arrested and it's looking like you could go to prison. You mention you are couch surfing and your lawyer tells you that you are eligible for New Beginnings Court. The judge assigns you a keyworker from the Auckland City Mission, who supports you into emergency accommodation.`,
    choices: [
      { text: ">>", nextScenario: `` },
    ],
  },
  {
    id: "communityHousingEnding",
    text: `You thought things were hopeless, but you got the help you needed. The Mission helped you find long-term accommodation with a Community Housing Provider, which means a maximum of 25% of your income goes on rent. You can't afford luxuries, but you can afford to eat and have a safe place to live. Best of all, your wife and kids want to see you again. You're free of the the painkillers, as the root of your pain is being treated. You and your family are rebuilding towards a good future. You feel hopeful.`,
    choices: [
      { text: ">>", nextScenario: `` },
    ],
  },
  {
    id: "feelShameEnding",
    text: `You feel shame about asking for help. You've seen people queueing for food at the Mission in the past and never thought you'd be in this situation. You're not sure what they'll say about the painkillers and alcohol and you don't feel able to cope without these things. After a few months on the street, you have found a community. You tell yourself you are making it work out okay and this is just temporary.`,
    choices: [
      { text: ">>", nextScenario: `` },
    ],
  },
  {
    id: "richardsStoryEnding",
    text: `Richard works for the Auckland City Mission. Watch Richard's story - a journey from homelessness to achieving life's aspirations.`,
    choices: [
      { text: ">>", nextScenario: `` },
    ],
  },

];