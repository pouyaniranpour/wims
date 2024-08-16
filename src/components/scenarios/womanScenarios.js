export const woman = [
  {
    id: "start",
    text: `You are a single woman with an eight year old daughter. You have a regular cleaning job`,
    choices: [
      {
        text: "Give your partner a loan",
        nextScenario: "partnersBusinessFails",
      },
      {
        text: "Keep your savings",
        nextScenario: `keepSavingsRandom${Math.floor(Math.random() * 2) + 1}`,
      }, //TODO
    ],
  },
  /* ====== Keep Savings Path #1 ====== */
  {
    id: "keepSavingsRandom1",
    text: `Your partner isn't happy, but seems to accept your choice. He then tells you his landlord has given him an eviction notice. He and his mate have nowhere to stay, so they will be moving in for a few weeks. You don't like this option, or the new "mate," but they just arrive. Often you arrive home after work to find several men on your sofa and you feel very uncomfortable around them. You ask your partner to get his mate to leave and stop the friends showing up.`,
    choices: [{ text: "Next", nextScenario: "argumentWithPartner" }],
  },
  {
    id: "argumentWithPartner",
    text: `It turns into an argument about money and your partner says it's your fault his business failed. He hits you. You feel very unsafe and terrified for your daughter. You say you will call the police but the men, including your partner, threaten to hurt you if you get them kicked out. What can you do?`,
    choices: [
      { text: "Call the police", nextScenario: "callPolice" },
      {
        text: "Ask family for support",
        nextScenario: `familySupportRandom${Math.floor(Math.random() * 3) + 1}`
      },
    ],
  },
  //Call the police path branch from argument with partner
  {
    id: "callPolice",
    text: `The police turn up. The men all leave. After the police leave, the men return and the next thing you know is that you wake up in hospital with your daughter asleep in a chair next to you.`,
    choices: [{ text: "Next", nextScenario: "womensRefugeEnding" }],
  },

  //Ask family for support branch from argument with partner
  {
    id: "familySupportRandom1",
    text: `Your parents have passed away and you've lost touch with your brother who lives in Australia. Should you try contacting him anyway?`,
    choices: [
      { text: "Contact brother", nextScenario: "contactBrother" },
      { text: "Live in your car", nextScenario: "liveInCar" },
    ],
  },
  //Contact your brother branch from ask family for support #1
  {
    id: "contactBrother",
    text: `You have a great chat with your brother and he says you can come and live with him, but you need to pay for the flights. You sell your car and spend all you have getting organised. Your brother meets you in Melbourne.`,
    choices: [{ text: "Next", nextScenario: "stayingWithBrotherEnding" }],
  },
  //Live in your car branch from ask family for support #1
  {
    id: "liveInCar",
    text: `You decide that you can live in your car. You feel really scared each night and make sure cardboard is jammed into every crack and the doors are locked. Sometimes, people bang on the door. Your work suffers and you are struggling to keep yourself and your clothes clean. You know it's really unsafe for your daughter and you don't know what to do. You google for help. The Auckland City Mission comes up on the search and you face the reality that you are homeless. You call the Mission.`,
    choices: [{ text: "Next", nextScenario: "liveInCarEnding" }],
  },
  //Ask family for support branch from argument with partner
  {
    id: "familySupportRandom2",
    text: `You ask a friend for help and she says you and your daughter can sleep on her couch.`,
    choices: [{ text: "Next", nextScenario: "fired" }],
  },
  {
    id: "fired",
    text: `A fortnight later, without notice, your company informs you that they are insolvent and that you shouldn't bother showing up tomorrow. You are out of work. Your friend then says she's sorry, but she needs her living room back. She offers to keep your daughter living with her. She asks whether you can stay with someone else. You feel ashamed, so you lie and say "yes," but you don't. What now?`,
    choices: [
      { text: "Take daughter with you", nextScenario: "takeDaughter" },
      {
        text: "Leave daughter with your friend",
        nextScenario: `leaveDaughterRandom${Math.floor(Math.random() * 2) + 1}`,
      },
    ],
  },
  //Take your daughter with you branch from where you are fired
  {
    id: "takeDaughter",
    text: `Another friend lends you a tent and lets you pitch it in her backyard. She lets you use her bathroom, laundry and kitchen so you are able to stay clean and "keep up appearances." Your savings are almost gone and you have no job.`,
    choices: [
      { text: "Next", nextScenario: "daughterRunsAway" },
    ],
  },
  {
    id: "daughterRunsAway",
    text: `Your daughter hates her new life and is having nightmares and refusing to go to school. Teachers are asking questions. She runs away and you can't find her. You have to go to the police.`,
    choices: [
      { text: "Next", nextScenario: "policeFindDaughter" },
    ],
  },
  {
    id: "policeFindDaughter",
    text: `The police find her. A caring bystander took her home, gave her food and bought her some new clothes. The police involve Oranga Tamariki.`,
    choices: [
      { text: "Next", nextScenario: "orangaTamariki" },
    ],
  },
  {
    id: "orangaTamariki",
    text: `Oranga Tamariki help you access emergency accommodation, where you and daugher can feel safe. They also refer you to a community social service to support you to finding long-term accommodation. You accept their help.`,
    choices: [
      { text: "Next", nextScenario: "orangaTamarikiEnding" },
    ],
  },
  //Leave your daughter with friend branch #1 from where you are fired
  {
    id: "leaveDaughterRandom1",
    text: `You start living in your car and any savings are quickly used up by giving money to your friend for your daughter and trying to get by. Can you get a benefit?`,
    choices: [
      { text: "Next", nextScenario: `benefitOutcomeRandom${Math.floor(Math.random() * 2) + 1}` },
    ],
  },
  {
    id: "benefitOutcomeRandom1",
    text: `Sorry, you need a permanent address for a benefit. You are getting hungry, but there's no fridge or oven in your car and you are going into debt on your credit card. You ask a local foodbank for help.`,
    choices: [
      { text: "Next", nextScenario: `acmBreakfastEnding` },
    ],
  },
  {
    id: "benefitOutcomeRandom2",
    text: `Your friend agrees to let you use her address, because you can't receive a benefit without a permanent address. You know your IRD number and have a bank account, so you fulfil the requirements. Work and Income will put you forward for jobs and you are hopeful you can get back on your feet.`,
    choices: [
      { text: "Next", nextScenario: `getAnotherJobEnding` },
    ],
  },
  //Leave your daughter with friend branch #2 from where you are fired
  {
    id: "leaveDaughterRandom2",
    text: `You go to Work and Income and say you have nowhere to go. You say you don't have any dependents because you mistakenly believe that it will be harder for them to find you accommodation. The case worker finds you emergency accommodation for the night.`,
    choices: [
      { text: "Next", nextScenario: "emergencyAccommodation" },
    ],
  },
  {
    id: "emergencyAccommodation",
    text: `You only last one night in emergency accommodation. There is one shared bathroom and most other people there are male. The locks on the shower doors are broken and there's no way as a female that you'll feel safe in the shower. Another friend lends you a tent and you camp on her back lawn.`,
    choices: [
      { text: "Next", nextScenario: "landlord" },
    ],
  },
  {
    id: "landlord",
    text: `Your landlord gets in touch and demands the rent. You explain you aren't living there anymore and tell her the situation. She is not sympathetic and tells you that you are foolish for trusting your partner in the first placed. She will be charging you for any damages. You still have items in the apartment that you would like back and ask her if she will consider letting you get these once she gets your ex-partner evicted. She hangs up on you.`,
    choices: [
      { text: "Next", nextScenario: "friendPhonesACM" },
    ],
  },
  {
    id: "friendPhonesACM",
    text: `Without your knowledge, your friend has phoned the Auckland City Mission and asked them to come and see you.`,
    choices: [
      { text: "Next", nextScenario: "homelessnessDefinitionEnding" },
    ],
  },
  //Ask family for support branch #3 from argument with partner
  {
    id: "familySupportRandom3",
    text: `You ask your sister and she lets you stay in her garage along with another family she is helping. There are six of you and you manage privacy with sheets. You have an extension cord running from your sister's house to a fridge and kettle. You get water from the outside tap and wash yourselves and clothes in a bucket. Is it summer?`,
    choices: [
      { text: "Next", nextScenario: `seasonOutcomeRandom${Math.floor(Math.random() * 2) + 1}` },
    ],
  },
  {
    id: "seasonOutcomeRandom1",
    text: `The garage has no insulation, so it's extremely hot. You do have money saved and keep your job, so you keep looking for an affordable rental. Someone at work mentions they have a room available and you decide to move there with your daughter.`,
    choices: [
      { text: "Next", nextScenario: "garageSummerEnding" },
    ],
  },
  {
    id: "seasonOutcomeRandom2",
    text: `The garage has no insulation, so it's extremely cold. You and your daughter develop respiratory infections and you can't afford to go to the doctor. You end up at the emergency hospital, waiting along with many others for hours. You eventually get antibiotics. But your daughter is always sick and you can't take time off to work to look after her. The school is asking questions.`,
    choices: [
      { text: "Next", nextScenario: "daughterSick" },
    ],
  },
  {
    id: "daughterSick",
    text: `Your daugher is hospitalised with severe pneumonia. A social worker refers you to Auckland City Mission.`,
    choices: [
      { text: "Next", nextScenario: "homelessnessDefinitionEnding" },
    ],
  },
  /* ====== Keep Savings Path #2 ====== */
  {
    id: "keepSavingsRandom2",
    text: `Turns out your partner had managed to get access to your bank account because he knows your phone password. He transferred out the money using your banking app. He says he just assumed you'd say yes. Are you going to report him for theft?`,
    choices: [
      { text: "Next", nextScenario: "reportTheft" },
    ],
  },
  {
    id: "reportTheft",
    text: `You decide to lay a complaint with the police and tell your partner that you want to end your relationship. The good news is that your bank agreed that because you did not tell your partner your pin codes, they will give your money back. Unfortunately, your ex has a key to your house and while you are out at work, he trashes your place and everything is damaged. He's going to prison.`,
    choices: [{ text: "Next", nextScenario: "evicted" }],
  },
  {
    id: "evicted",
    text: `Your landlord is angry and asks you to leave. You do not get your bond back. You do not have enough money for another bond, even if you could get a rental at short notice. You did have contents insurance, but it wasn't high enough to replace much. Now what?`,
    choices: [{ text: "Next", nextScenario: "familySupportRandom2" }],
  },
  /* ==== Give partner a loan ==== */
  {
    id: "partnersBusinessFails",
    text: `He may have had a big idea but it didn't pan out. Your savings are gone and he leaves soon after realising you don't have any more to give.`,
    choices: [{ text: "Next", nextScenario: "financialAbuseEnding" }],
  },
  /* ============= Endings ============ */
  {
    id: "financialAbuseEnding",
    text: `You can't believe someone you loved and trusted did this and you feel foolish. Because of this, you don't phone the police or follow up this financial abuse. But you do decide to do some more courses around budgeting and investments and when you are promoted at work you have a bit extra to make the choices you have planned for. You are determined that your daughter will be able to make good choices and have opportunities in life.`,
    choices: [],
  },
  {
    id: "womensRefugeEnding",
    text: `At hospital, a social worker tells you about Women's Refuge and helps you and your daughter get to a safe house. You're going to get the help you need.`,
    choices: [],
  },
  {
    id: "stayingWithBrotherEnding",
    text: `Your brother is single and seems happy enough for you to stay there long term. You agree to cook the meals and keep the house clean as a way to thank him, especially because he works long shifts as a driver. You find your daughter a school. You find an overnight cleaning job. It's exhausting, but you are thankful for a safe house. As your daughter gets older, you have more options for work and she thrives living in a safer house and loves her uncle. Your future is improving.`,
    choices: [],
  },
  {
    id: "liveInCarEnding",
    text: `You are so embarrassed to need their help, but they explain that living in a car, tent, garage or overcrowded house is defined as experiencing homelessness. The Mission offers to help you access emergency accommodation, assist with a food parcel and go with you to talk things through with Kainga Ora about why you had to leave your house. You and your daughter's health and wellbeing begin to improve from this point forward.`,
    choices: [],
  },
  {
    id: "acmBreakfastEnding",
    text: `Someone tells you about the Auckland City Mission breakfast service. You go in and receive a good warm meal. A staff member sits with you and offers a listening ear. You're not sure if they can help, but they tell you about the MSD support service onsite. Orange Sky are onsite that day, so you get a shower with them while the Mission staff find suitable emergency accommodation, where you and your daughter can be together and feel safe. They also assign you a keyworker who will support you as you get back on your feet. It's a relief to have a safe place to stay and you and your daughter's health and wellbeing improve. The future is looking brighter.`,
    choices: [],
  },
  {
    id: "getAnotherJobEnding",
    text: `You do get another job and it's during the day, so you can work while your daughter is at school and be around her during the evening. With your income, you can pay your friend some board and help towards expenses. After a while you are promoted in your work and you and your friend decide to find a bigger place to rent together, so you can have your own bedroom instead of living in her lounge. Thanks to the support your friend gave you when you needed it most, you feel like everything is much more stable. You and your daughter have a good future to look forward to.`,
    choices: [],
  },
  {
    id: "homelessnessDefinitionEnding",
    text: `You are so embarrassed, because you tell them you aren't "homeless." However, they explain that living in a car, tent, garage, or overcrowded house is defined as experiencing homelessness. The Mission offer to help you access emergency accommodation and connect you with a service for families that will find you a long-term place to live. Over time they also assist you with food parcels when you need them so you can keep paying the urgent bills.`,
    choices: [],
  },
  {
    id: "orangaTamarikiEnding",
    text: `Your case worker at Work and Income explains that there might be some options for you to get more training and be supported in a benefit while you do this. This could lead to a better job. Unfortunately, the classes are at times where your daughter will be left home alone, so you can't take this option. You do get another cleaning job, but it is in the daytime so you don't have to leave your daughter alone at night. You and your daughter's health and wellbeing improve and the future is more hopeful.`,
    choices: [],
  },
  {
    id: "garageSummerEnding",
    text: `Fortunately, you were able to get help from a family member and keep your job and savings. You're safe and housed for now.`,
    choices: [],
  },
];
