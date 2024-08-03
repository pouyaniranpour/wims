const youth = [
  {
    id: "start",
    text:
      "You are 17 years old, After years of struggle, you come out as transgender to your family. \n" +
      "Even though your mother is kind, your stepfather demands you leave the house immediately and don't come back. " +
      "You quickly gather up a bag of clothes and your mum gives you some money for food." +
      "Your brother and sister are crying and your stepdad keeps shouting, so you are stunned and not able to think clearly." +
      "You need somewhere to go. Where next?",
    choices: [
      { text: "Church", nextScenario: "church" },
      { text: "Close Friend", nextScenario: "contactFriend" },
      { text: "Google", nextScenario: "google" },
    ],
  },
  {
    id: "church",
    text: [
      "It's a Sunday night so the church is locked up and there's no-one around. \n" +
        "You did grab a warm sleeping bag so you find a spot out of the wind & rain and bunk there overnight. " +
        "It's cold, you're on hard concrete and you are still shaking about what happened.You go over and over it in your head. \n" +
        "You were so sure your family would accept the news.You don't get any sleep. \n" +
        "Your sleeping bag gets wet.  The next morning the church secretary arrives to find you. \n" +
        "She makes you a cup of tea, gives you breakfast and chats about your situation. " +
        "She starts phoning around trying to see who can help. \n" +
        "When she asks what you do want and where you could go to live, you stare at her. " +
        "You don't know. You were planning to study at university while living at home to save money. \n" +
        "She asks if there is another family member you can call. You think your aunty might help. \n",
    ],
    choices: [{ text: "Call Aunty", nextScenario: "youCalledAunty" }],
  },
  {
    id: "youCalledAunty",
    text: [
      "Your aunty arrives in a flurry of hugs which is nice. " +
        "But she says they can maybe put you up for 6 months - not forever. " +
        "She says they can't afford it but also you should be old enough to stand on your own two feet. " +
        'She makes it plain you are not to have any "relationships" while living there and also to please tone down any "flamboyant dress". ' +
        `The family "will love you but won't call you that" (your new name). ` +
        "You are not to talk with your cousins about being trans. Do you accept?",
    ],
    choices: [
      { text: "Not Sure", nextScenario: "getSomeSpace" },
      { text: "No", nextScenario: "runAwayToSchool" },
    ],
  },
  {
    id: "getSomeSpace",
    text: [
      "You pretend to go to the toilet to get some space. " +
        "When you return the church administrator has asked the Social Worker to step in. " +
        "He lays out a few options if you don't want to stay with your aunty but says it will take a few days to sort out. " +
        "He doesn't know of a place you can go for tonight. " +
        "Why don't you go with your aunty for a couple of days and I'll look into some options and meet again in a couple of days to go through them? " +
        "Go with your aunt?",
    ],
    choices: [
      { text: "Yes", nextScenario: "goWithAuntYes" },
      { text: "No", nextScenario: "runAwayToSchool" },
    ],
  },
  {
    id: "goWithAuntYes",
    text: [
      "Your aunt and uncle have a spare room and for a few days you manage to keep to your own room. " +
        "You all pretend nothing has happened but then your cousin asks your uncle why you are crying all the time and " +
        "does it really matter if someone is gay?" +
        "Even though you haven't said anything, they immediately assume you have. " +
        "There is a big scene. You are kicked out again.",
    ],
    choices: [{ text: ">>>", nextScenario: "callSocialWorker" }],
  },
  {
    id: "runAwayToSchool",
    text: [
      "You are too emotional to be understanding about everyone else's issues. " +
        "Why are they making you work harder? " +
        "You pretend to go to the toilet but grab your stuff and run off. " +
        "You decide to hide on the school's premises. " +
        "You know where there are showers you can sneak into during the day. " +
        "It's a big school.  There is a dairy nearby.",
    ],
    choices: [{ text: ">>>", nextScenario: "trainIntoCity" }],
  },
  {
    id: "trainIntoCity",
    text: [
      "Trained into City/hang out at McDonalds and make friends with other Rangatahi who show you where they are living under a bridge. " +
        "You need money for food and you're hoping to get work but can't think how with no easy shower facilities or permanent address. " +
        "Your friends tell you you aren't eligible for a benefit but there might be a cash job or if you are willing to go and see MSD you might be able to get the Youth Payment.",
    ],
    choices: [
      { text: "Go to MSD", nextScenario: "referralByMSD" },
      {
        text: "Don't go to MSD",
        nextScenario:
          Math.floor(Math.random() * 2) + 1 === 1
            ? "policeComeAroundEnding"
            : "approachedByMan",
      },
    ],
  },
  {
    id: "policeComeAroundEnding",
    text: [
      "In the end, the police arrive and let you know that your mum filed a Missing Person's Report so they decide to take you back home. " +
        "You ask them not to do this but you aren't able to think of anyone else who can help. " +
        'They say they will "have a talk" with your parents.When you arrive in the police car, ' +
        "your mum runs out to you but your stepdad tells the police that you are not welcome to live there. " +
        "The police try to reason with him but he stands his ground. " +
        "The police call a youth housing service and ask them to put you up for the night with an assessment booked for the following day.",
    ],
    choices: [],
  },
  {
    id: "approachedByMan",
    text: [
      'A man comes up to you and offers a place to live if you "are nice to him".  What now?',
    ],
    choices: [
      { text: "Yes", nextScenario: "acceptMansOffer" },
      { text: "No", nextScenario: "stealFromDairy" },
    ],
  },
  {
    id: "stealFromDairy",
    text: [
          "If you aren't willing to be a sex worker then you may have to steal to survive. " +
        "You steal some food from a dairy a few times but on the 4th time they are waiting for you and haul you in." +
        "The owner says she's sick of kids stealing from her and wants to teach you a lesson. She calls the police.",
    ],
    choices: [
      { text: ">>>", nextScenario: Math.floor(Math.random() * 2) + 1 === 1
        ? "theftChargesDropped"
        : "theftChargesNotDropped" },
    ],
  },
  {
    id: "theftChargesDropped",
    text: [
      "The police ask if you're ok and listen to your situation. " +
      "They convince the dairy owner to drop charges. They take you to Auckland City Mission."
    ],
    choices: [
      { text: ">>>", nextScenario: "homeGroundEnding" },
    ],
  },
  {
    id: "theftChargesNotDropped",
    text: [
      "The police ask if you're ok and listen to your situation. " +
      "They try to convince the dairy owner to drop charges but she is sick of shoplifters and insists. " +
      "The police involve their Youth Aid services who support you into accommodation " +
      "and work with you to try and resolve the reasons for your shoplifting."
    ],
    choices: [
      { text: ">>>", nextScenario: "goodEnding" },
    ],
  },
  {
    id: "acceptMansOffer",
    text: [
      "You know what this means but don't feel like you have any other choice. " +
        "You live with him for a few months. He doesn't want you to get a job so he doesn't help you. " +
        "You feel trapped. One day you walk past the Auckland City Mission and go inside. " +
        "There are some people asleep on couches but it feels peaceful. You ask for help.",
    ],
    choices: [{ text: ">>>", nextScenario: "homeGroundEnding" }],
  },
  {
    id: "homeGroundEnding",
    text: [
      "You realise you've turned 18 in the last few months. " +
        "The Mission finds you a place to stay that night and you feel safe. " +
        "You stay in your room for a few days just to sleep and feel ok. " +
        "A keyworker is assigned to your case and they listen a lot and patiently you work together on all the decisions and actions you can take. " +
        "They take you to HomeGround to meet with a helpful MSD liaison and you find out how you can study " +
        "and what benefits you are eligible for. " +
        "Your keyworker helps you apply - especially because you left your driver's license and birth certificate at home. " +
        "You end up in a house boarding with other rangatahi/ youth. The future is more hopeful.",
    ],
    choices: [],
  },
  {
    id: "referralByMSD",
    text: [
      "Trained into City/hang out at McDonalds and make friends with other Rangatahi who show you where they are living under a bridge. " +
        "You need money for food and you're hoping to get work but can't think how with no easy shower facilities or permanent address. " +
        "Your friends tell you you aren't eligible for a benefit but there might be a cash job or if you are willing to go and see MSD you might be able to get the Youth Payment.",
    ],
    choices: [
      { text: "Go to MSD", nextScenario: "referralByMSD" },
      { text: "Don't go to MSD", nextScenario: "" },
    ],
  },
  {
    id: "callSocialWorker",
    text: [
      "You call the Social Worker and he picks you up and takes you back to the church office. " +
        "He makes calls on your behalf and you end up meeting with a keyworker from the Auckland City Mission who finds you a place to stay. " +
        "They explain the lack of funding and support for people aged 18 and under " +
        "but say there is hope for you and they will help you within their networks. " +
        "Being with someone non- judgemental helps.",
    ],
    choices: [{ text: ">>>", nextScenario: "goodEndingOne" }],
  },
  {
    id: "goodEnding",
    text: [
      "You are going to be ok. You have learned the grim reality that family don't always accept you, " +
        "as well as finding out that NZ has a problem with proper help for teenagers and children who are unsafe or need to leave their homes. " +
        "But you will receive enough support. It's possible your family will accept you again but in the meantime, " +
        "you'll make good friends who will help you through this horrible time. " +
        "Your dream to be a Doctor takes a back seat for a few years because you have to get a job to support yourself. " +
        "The future starts to look much brighter and you are able to laugh again.",
    ],
    choices: [],
  },
  {
    id: "contactFriend",
    text: [
      "Your friend can't believe you've told your family and tells you it was stupid. " +
      "But you say you feel like you can't keep living two lives - it's breaking you. " +
      "Your friend asks their parents if you can stay with them for a while.",
    ],
    choices: [
      { text: ">>>", nextScenario: Math.floor(Math.random() * 2) + 1 === 1
        ? "friendsParentsSayYes"
        : "friendsParentsSayNo" },
    ],
  },
  {
    id: "friendsParentsSayYes",
    text: [
      "Your friend blurts everything out. Their parents offer support. " +
      "They will phone the different organisations for you. " +
      `They won't "rescue" you but support you. ` +
      `You feel like you really need to be rescued but are grateful they aren't angry.`,
    ],
    choices: [
      { text: ">>>", nextScenario: "goodEndingTwo" },
    ],
  },
  {
    id: "friendsParentsSayNo",
    text: [
      "Your friend's parents are sympathetic, but they don't feel comfortable " +
      `"overriding your parents' authority" by letting you stay with them.`,
    ],
    choices: [
      { text: ">>>", nextScenario: "startLivingOnStreet" },
    ],
  },
  {
    id: "startLivingOnStreet",
    text: [
      `You start living on the street and gradually make your way into the CBD as you are constantly noticed and "moved on" where you are. ` +
      `People avoid your eyes and make comments about how dirty and skinny you are. ` +
      `You beg for money. People say they know it's all going on drugs as they give it to you. ` +
      `Someone says that you're probably making more money than them each day begging. ` +
      `When you go into a fast food chain to buy food and go to the toilet and wash, ` +
      `they refuse you service and demand you leave. You are smelly and make other customers feel uncomfortable. ` +
      `You feel really scared at night time and try to stay awake as much as possible. ` +
      `That means you sleep more in the day and people walk past you grumbling about how if only you'd work like them, you'd be better off.`,
    ],
    choices: [
      { text: ">>>", nextScenario: "acmOutreachTeamNotified" },
    ],
  },
  {
    id: "acmOutreachTeamNotified",
    text: [
      `The Auckland City Mission Outreach Team are notified by a member of the public ` +
      `that someone is rough sleeping in the area and they come and visit you, ` +
      `have a chat.You are hesitant to take up their support initially but after a few visits over a couple of weeks, ` +
      `you decide to trust them and take up their offer of accommodation and support.`,
    ],
    choices: [
      { text: ">>>", nextScenario: "homeGroundEnding" },
    ],
  },
  {
    id: "goodEndingTwo",
    text: [
      "This is where it ends. You have safety and a place to stay for now. " +
      "Your friend's parents are empathetic and want to organise counselling so they contact the school for help. " +
      "The school's Social Worker is overloaded but managed to link you in with various groups you can follow up " +
      "to help you support your transition. He also tells you about the Youth Payment available from MSD. " +
      "This is enough to cover cheap board and may mean your friend's parents find it easier " +
      "to have you while you work things out. It's a bit rocky but you find your way and a few years later you are blooming.",
    ],
    choices: [],
  },
  {
    id: "google",
    text: [
      `Thankfully you are over 16 and able to contact organisations such as Lifewise ` +
      `and places that do have accommodation for someone your age. ` +
      `It's Sunday night so you couch surf at a friend's for one night. ` +
      `Neither you nor they mention to the parents that you've been kicked out of home. ` +
      `You should start phoning them immediately the next morning but you are having some kind of reaction ` +
      `to your parent's rejection and you feel unable to get out of bed.` +
      `You stay like that for a day and night before your friend's parents challenge you. ` +
      `You can't even say what's happened properly. It's like you've lost your words.Your friend ends up explaining.What happens ?`,
    ],
    choices: [
      { text: ">>>", nextScenario: Math.floor(Math.random() * 2) + 1 === 1
        ? "friendsParentsSayYes"
        : "friendsParentsSayNo" },
    ],
  },

];

const woman = [
  {
    id: "start",
    text:
      "You are a single woman with an 8 year old daughter.  You have a regular cleaning job that pays minimum wage and you live in a small rented apartment.  You have $1200 in savings." +
      "Your new partner has a business venture and asks you to loan him your savings to get started.  " +
      "You'll get a share in the profits as a co-owner and it sounds promising. " +
      "Should you keep saving or loan the money for the business?",
    choices: [
      { text: "Loan for the business", nextScenario: "loanForBusiness" },
      {
        text: "Keep Saving",
        nextScenario:
          `keepSaving${Math.floor(Math.random() * 2) + 1}`
      },
    ],
  },
  {
    id: "keepSaving1",
    text:
      "Your partner isn't happy but seems to accept your choices. " +
      "His mate also moves in with you - he has nowhere else to stay. Soon there's another mate. " +
      "After an argument about money, your partner hits you and you feel very unsafe and terrified for your daughter. " +
      "You say you will call the police but the men, " +
      "including your partner, threaten to hurt you if you get them kicked out.What can you do?",
    choices: [
      { text: "Call Police anyway", nextScenario: "callPoliceOnPartner" },
      {
        text: "Ask family for support",
        nextScenario: `askFamily${Math.floor(Math.random() * 3) + 1}`        
      },
    ],
  },
  {
    id: "keepSaving2",
    text:
      "Turns out your partner had managed to get access to your bank account and transferred out the money. " +
      "He says he just assumed you'd say yes. " +
      "Are you going to report him for theft ?",
    choices: [
      { text: "Yes", nextScenario: "reportPartnersTheft" },
      {
        text: "No",
        nextScenario:"dontReportPartnersTheft",
      },
    ],
  },
];

const man = [
  {
    id: "start1",
    text: "You have been laid off from a big company as part of a restructure.  You can't find work easily and the bills are mounting up.   A mate offers you some building cash jobs under the table. Yes or No?",
    choices: [
      { text: "Yes", nextScenario: "acceptFriendsOffer" },
      {
        text: "No",
        nextScenario:
          Math.floor(Math.random() * 2) + 1 === 1
            ? "refuseFriendsOffer1"
            : "refuseFriendsOffer2",
      },
    ],
  },
  {
    id: "start2",
    text: "You are helping fix a friend's roof and fall off breaking your leg, hip and fracturing a vertabrae in your back.  What will happen?",
    choices: [{ text: ">>>", nextScenario: "hospital" }],
  },
];

const allScenarios = {
  youth: youth,
  woman: woman,
  man: man,
};

export { allScenarios };
