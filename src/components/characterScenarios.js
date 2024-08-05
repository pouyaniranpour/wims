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
      { text: "Loan for the business", nextScenario: "partnerLeaves" },
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
      { text: "Call Police anyway", nextScenario: "callPolice" },
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
      "He says he just assumed you'd say yes. Are you going to report him for theft?",
    choices: [
      { text: "Yes", nextScenario: "reportPartnersTheft" },
      {
        text: "No",
        nextScenario: "partnerLeaves"        
      },
    ],
  },
  {
    id: "reportPartnersTheft",
    text:
      "You decide to lay a complaint with the police and kick him out. " +
      "While you were out at work, he set a fire in your apartment and everything is smoke damaged" +
      "He's going to prison. You are evicted by your landlord and do not get your bond back. " +
      "You do not have enough money for another bond, even if you could get a rental at short notice. " +
      "You did have contents insurance but it wasn't high enough to replace much. Now what?",
    choices: [
      { text: ">>>", nextScenario: "askFamily3" },
    ],
  },
  {
    id: "partnerLeaves",
    text:
      "He may have had a big idea but it didn't pan out. " +
      "Your savings are gone and he leaves soon after realising you don't have any more to give.",
    choices: [
      { text: ">>>", nextScenario: "irdEnding" },
    ],
  },
  {
    id: "irdEnding",
    text:
      "Like many people you never realise that he was legally obligated to pay you back " +
      "and that if you had signed an xyz agreement IRD would pursue this..???", //FIXME fix this bubble when more info is given
    choices: [],
  },
  {
    id: "callPolice",
    text:
      "The police turn up. The men all leave. " +
      "After the police leave, the men come back in the night and beat you up. " +
      "You wake up in the hospital with your daughter asleep in a chair next to you.",
    choices: [
      { text: ">>>", nextScenario: "womensRefugeEnding" },
    ],
  },
  {
    id: "womensRefugeEnding",
    text:
      "A social worker at the hospital tells you about Women's Refuge " +
      "and helps you and your daughter get to a safe house. You're going to get the help you need.", //FIXME scenarios branching from here don't make sense
    choices: [],
  },
  {
    id: "askFamily1",
    text:
      "Your parents have passed away and you've lost touch with your brother who lives in Australia.",
    choices: [
      { text: "Contact brother", nextScenario: "contactBrother" },
      {
        text: "Live in your car",
        nextScenario: "livingInCar"        
      },
    ],
  },
  {
    id: "askFamily2",
    text:
      "You ask your sister and she let's you stay in her garage along with another family she is helping. " +
      "There are 6 of you and you manage privacy with sheets. " +
      "You have an extension cord running from your sister's house to a fridge and kettle. " +
      "You get water from the outside tap and wash yourselves and clothes in a bucket. Is it summer?",
    choices: [
      { text: "Yes", nextScenario: "garageSummer" },
      {
        text: "No",
        nextScenario: "garageWinter"
      },
    ],
  },
  {
    id: "garageSummer",
    text:
      "The garage has no insulation, so it's extremely hot. " +
      "You do have money saved and keep your job so you keep looking for an affordable rental. " +
      "Someone at work mentions they have a room available and you decide to move there with your daughter.",
    choices: [
      { text: "Yes", nextScenario: "garageSummerEnding" },
    ],
  },
  {
    id: "garageSummerEnding",
    text:
      "Your ending: fortunately, you were able to get help from a family member and keep your job and savings. " +
      "You're safe and housed for now, but the future looks uncertain.",
    choices: [],
  },
  {
    id: "garageWinter",
    text:
      "The garage has no insulation, so it's extremely cold. " +
      "You and your daughter develop respiratory infections and you can't afford to go to the doctor." +
      "You end up at the emergency hospital waiting along with many others for hours. " +
      "You eventually get antibiotics, but your daughter is always sick and you can't take time off work to look after her. " +
      "The school is asking questions.",
    choices: [
      { text: ">>>", nextScenario: "daughterHospitalised" },
    ],
  },
  {
    id: "daughterHospitalised",
    text:
      "Your daughter is hospitalised with severe pneumonia. " +
      "A social worker refers you to the Auckland City Mission.",
    choices: [
      { text: ">>>", nextScenario: "acmEnding4" },
    ],
  },
  {
    id: "acmEnding4",
    text:
      "You are so embarrassed to need their help, but they explain that living in a car, " +
      "tent, garage or overcrowded house is defined as experiencing homelessness. " +
      "The Mission offer to help you access emergency accommodation and also assist you with a food parcel. " +
      "You and your daughter's health and wellbeing improves.",
    choices: [],
  },
  {
    id: "askFamily3",
    text:
      "You ask a friend and she says you and your daughter can sleep on her couch.",
    choices: [
      { text: ">>>", nextScenario: "firedByEmployer" },,
    ],
  },
  {
    id: "firedByEmployer",
    text:
      "A fortnight later, without notice, your company informs you they are insolvent " +
      "and don't bother showing up tomorrow. You are out of work. " +
      "At the same time, your friend says she's sorry but she needs her living room back. " +
      "She offers to keep your daughter living with her. " +
      "She asks if you can stay with someone else? " +
      `You feel ashamed so you lie and say "yes", but you don't. What now?`,
    choices: [
      { text: "Leave daughter with friend", nextScenario: "leaveDaughterWithFriend" },
      { text: "Take daughter with you", nextScenario: "emergencyAccommodation" },
    ],
  },
  {
    id: "emergencyAccommodation",
    text:
      "You only last one night in emergency accommodation. There is one shared bathroom " +
      "and most other people there are male. The locks on the shower doors are broken " +
      "and there's no way as a female that you'll feel safe in the shower. " +
      "A friend lends you a tent and you camp on her back lawn.",
    choices: [
      { text: ">>>", nextScenario: Math.floor(Math.random() * 2) + 1 === 1
        ? "daughterRunsAway"
        : "landlordDemandsRent" },
    ],
  },
  {
    id: "landlordDemandsRent",
    text:
      "Your landlord gets in touch and demands the rent. " +
      "You explain you aren't living there anymore and tell her the situation. " +
      "She is not sympathetic and tells you that you are foolish for trusting your partner in the first place. " +
      "She will be charging you for any damages. You still have items in the apartment you would like back " +
      "and ask her if she will consider letting you get these once she gets your ex-partner evicted. " +
      "She hangs up on you.",
    choices: [
      { text: ">>>", nextScenario: "friendPhonedACM"},
    ],
  },
  {
    id: "friendPhonedACM",
    text:
      "Without your knowledge, your friend has phoned the Auckland City Mission and asked them to come and see you.",
    choices: [
      { text: ">>>", nextScenario: "acmEnding4"},
    ],
  },
  {
    id: "daughterRunsAway",
    text:
      "Your daughter hates her new life and is having nightmares and refusing to go to school. " +
      "Teachers are asking questions. She runs away and you can't find her. " +
      "You have to go to the police.",
    choices: [
      { text: ">>>", nextScenario: "policeFindDaughter" },
    ],
  },
  {
    id: "policeFindDaughter",
    text:
      "The police find her. A caring bystander took her home and gaver her food and bought her some new clothes. " +
      "Oranga Tamariki get involved. ", //FIXME add more text
    choices: [
      { text: ">>>", nextScenario: "acmEnding4" },
    ],
  },
  {
    id: "leaveDaughterWithFriend",
    text:
      "You start living in your car and any savings are quickly used up by giving money to your friend " + 
      "for your daughter and trying to get by. " +
      "Can you get a benefit?",
    choices: [
      { text: "Yes", nextScenario: "canGetBenefit" },
      { text: "No", nextScenario: "cantGetBenefit" }
    ],
  },
  {
    id: "canGetBenefit",
    text:
      "Your friend agrees to let you use her address because you can't receive a benefit without a permanent address. " +
      "You know your IRD number and have a bank account, so you fulfil the requirements. " +
      "MSD will put you forward for jobs and you are hopeful you can get back on your feet.",
    choices: [
      { text: "?", nextScenario: "?" }, // FIXME fix the scenario leading from this bubble
    ],
  },
  {
    id: "cantGetBenefit",
    text:
      "Sorry, you need a permanent address for a benefit. " +
      "You are getting hungry, but there's no fridge, or oven in your car " +
      "and you are going into debt on your credit card. " +
      "You ask a local foodbank for help.",
    choices: [
      { text: ">>>", nextScenario: "acmEnding2" },
    ],
  },
  {
    id: "acmEnding2",
    text:
      "Someone tells you about the Auckland City Mission breakfast service. " +
      "You go in and receive a warm meal.  A staff member sits with you and offers a listening ear. " +
      "You're not sure if they can help, but they tell you about MSD support services onsite. " +
      "You also get a shower and they offer you some hygiene items. " +
      "They find suitable emergency accommodation where you and your daughter can feel safe. " +
      "They assign you a keyworker who can support you to get back on your feet.",
    choices: [],
  },
  {
    id: "contactBrother",
    text:
      "Your brother agrees to help you but you need to pay for the flights. " +
      "You sell your car and spend all you have getting organised. " +
      "Your brother meets you in Melbourne.",
    choices: [
      { text: ">>>", nextScenario: "stayingWithBrotherEnding" },
    ],
  },
  {
    id: "livingInCar",
    text:
      "You feel really scared each night and make sure cardboard is jammed into every crack and the doors are locked. " +
      "Sometimes, people bang on the door. Your work suffers and you are struggling to keep yourself and your clothes clean. " +
"You know it's really unsafe for your daughter and you don't know what to do. " +
      "You google for help. The Auckland City Mission comes up on the search " +
      "and you face the reality that you are homeless.You call the Mission.",
    choices: [
      { text: ">>>", nextScenario: "acmEnding" }, 
    ],
  },
  {
    id: "acmEnding",
    text:
      "You are so embarrassed to need their help but they explain that living in a car, tent, garage or overcrowded house is defined as experiencing homelessness. " +
      "The Mission offer to help you access emergency accommodation and also assist with a food parcel. " +
      "You and your daughter's health and wellbeing improves.",
    choices: [],
  },
  {
    id: "stayingWithBrotherEnding",
    text:
      "Your brother is single and seems happy enough for you to stay there long term. " +
      "You agree to cook the meals and keep the house clean as a way to thank him " +
      "especially because he works long shifts as a driver. " +
      "You find your daughter a school. You find an overnight cleaning job. " +
      "It's exhausting but you are thankful for a safe house even though the future is uncertain.",
    choices: [
      { text: ">>>", nextScenario: "stayingWithBrotherEnding" },
    ],
  },
  {
    id: "askFamily1",
    text:
      "Your parents have passed away and you've lost touch with your brother who lives in Australia.",
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
    text: "You have been laid off from a big company as part of a restructure. You can't find work easily and the bills are mounting up. " +
      "A mate offers you some building cash jobs under the table. Yes or No?",
    choices: [
      { text: "Yes", nextScenario: "acceptFriendsOffer" },
      {
        text: "No",
        nextScenario: `refuseFriendsOffer${Math.floor(Math.random() * 2) + 1}`, //TODO refuseFriendsOffer2 path
      },
    ],
  },
  {
    id: "acceptFriendsOffer",
    text: "You are helping fix the roof and fall off, breaking your leg, hip and fracturing a vertebra in your back. " +
      "Because you were paid under the table and your mate wasn't using proper safety equipment, he faces penalties and blames you. " +
    "You're fixed up in hospital, but aren't eligible for rehab. As a result, you can't work anymore and are on painkillers 24/7.",
    choices: [
      { text: ">>>", nextScenario: "painkillersNotWorking" },
    ],
  },
  {
    id: "painkillersNotWorking",
    text: "The pain and the anxiety you are feeling about supporting your family become too much. " +
      "It doesn't feel like the painkillers are working so you take more than recommended and also begin using alcohol to dull the pain. " +
      "The doctor asks you to come in to chat. You can't afford it and the prescription ends. You find someone willing to sell you a painkiller on the street. " +
      "After you spend grocery money on alcohol, your wife takes the kids and goes to live with her sister. " +
      "Your landlord gives you notice that he is selling the house and you need to leave. What now?",
    choices: [
      { text: "Live on a friend's couch", nextScenario: `friendsCouch${Math.floor(Math.random() * 2) + 1}` },
      { text: "Live in your car", nextScenario: `liveInCar${Math.floor(Math.random() * 2) + 1}` },
    ],
  },
  {
    id: "friendsCouch1",
    text: 'You ask around, but the only "mate" who will have you is the one who got you the painkillers. ' +
      "You don't know what his intentions are, so are unsure if it's safe to be there. But where else can you go? " +
      "You move in and he offers you an easy way to get some money by working for him. " +
    "It at least helps you pay your child support. ",
    choices: [
      { text: ">>>", nextScenario: "prisonEnding" },
    ],
  },
  {
    id: "friendsCouch2",
    text: "Your friend is happy to have you for a while. He was expecting you would get work, but now he finds out about the painkillers. " +
    "You borrow money from him and then he says he can't lends more and says he thinks you have a problem. Why not ask MSD for a benefit?",
    choices: [
      { text: "Visit MSD", nextScenario: `visitMSD${Math.floor(Math.random() * 2) + 1}` },
      { text: "Hope something else turns up", nextScenario: "evictedByFriend" },
    ],
  },
  {
    id: "visitMSD1",
    text: "You swallow your pride and go and ask for help at MSD. You are asked about your willingess to do any jobs - " +
      "especially those involving physical labour. You explain about your injuries and may be eligible for a Supported Living payment. " +
      "This is approximately $400 per week. You have to fill out some forms and see a doctor to get this. " +
    "The pills you are now taking are making it hard to get anything done and you don't do it.",
    choices: [
      { text: "?????", nextScenario: "????" },//FIXME unclear what next scenario is here
    ],
  },
  {
    id: "visitMSD2",
    text: "You swallow your pride and go and ask for help at MSD. You are asked about your willingess to do any jobs - " +
      "especially those involving physical labour. You explain about your injuries and may be eligible for a Supported Living payment. " +
      "Your friend helps you fill out the forms as your aren't functioning well due to the " +
    "pills and alcohol you are taking to manage the pain. Your friend suggests detox. Will you try it?",
    choices: [
      { text: "Yes", nextScenario: "detox" },
      { text: "No", nextScenario: "dontDetox" },
    ],
  },
  {
    id: "detox",
    text: "You are booked into the Social Withdrawal facility at the Auckland City Mission Te Tāpui Atawhai. " +
      "You go in and have access to counselling. After this you are referred to CADS, who run support groups." +
    "You mention that you are living on your friend's couch and a person from the Mission contacts you to offer help.",
    choices: [
      { text: ">>>", nextScenario: "offeredAccommodation" },
    ],
  },
  {
    id: "dontDetox",
    text: "You are worried that without the drugs and alcohol your pain will be unmanageable. You don't feel like you have the option and refuse.",
    choices: [
      { text: "Try another friend's couch", nextScenario: "noFriendsLeft" },
      { text: "Live in your car", nextScenario: "liveInCar1" },
    ],
  },
  {
    id: "offeredAccommodation",
    text: "You are offered a place at a hostel run by the Mission. You get 12 weeks support and you decide you will " +
      "attend the CADS sessions and get your life back on track. The Mission help your find a place to live and also offer " +
    "help with your injuries. You get referred to a specialist and get the surgery and rehab you need to reduce your pain.",
    choices: [
      { text: ">>>", nextScenario: "communityHousingEnding" },
    ],
  },
  {
    id: "evictedByFriend",
    text: "Your decision making is impaired by pain and the pills and alcohol you are using to try to manage it. " +
      "Nothing else turns up. Your friend has had enough. You come home to find all your possessions sitting outside the locked door. " +
    "Now what?",
    choices: [
      { text: "Try another friend's couch", nextScenario: "noFriendsLeft" },
    ],
  },
  {
    id: "noFriendsLeft",
    text: "After seeing you live on your mutual friend's couch, your remaining friends aren't keen. " +
      "In fact, you seem to be out of friends. Your family are supporting your wife and children and want nothing to do with you. " +
    "You can't use this option again. ",
    choices: [
      { text: "Visit MSD", nextScenario: "visitMSD1" },
      { text: "Live in your car", nextScenario: "liveInCar1" },
    ],
  },
  {
    id: "liveInCar1",
    text: "You can't afford petrol to drive anywhere, so park the car ona suburban street near a public toilet. " +
      "You put clothes and cardboard over the windows and try to be quiet. There's no shower at the toilets, " +
    "but you can splash water over yourself and try to keep clean.",
    choices: [
      { text: ">>>", nextScenario: "reported" },
    ],
  },
  {
    id: "liveInCar2",
    text: "What car? You don't own a car.",
    choices: [
      { text: ">>>", nextScenario: "sittingOnStreet" },
    ],
  },
  {
    id: "sittingOnStreet",
    text: "You sit on the street. It gets dark. You hear some people and get worried. " +
      "You hide in a bush overnight. You have a sleepless night. " +
      "In the morning you're exhausted and find a sunny private spot to sleep.",
    choices: [
      { text: ">>>", nextScenario: `approached${Math.floor(Math.random() * 2) + 1}` },
    ],
  },
  {
    id: "neighboursReport",
    text: "After 4 weeks, the neighbours report you.",
    choices: [
      { text: ">>>", nextScenario: `reported${Math.floor(Math.random() * 2) + 1}` },
    ],
  },
  {
    id: "reported1",
    text: "You get a parking ticket. You can't pay it, but have enough petrol to move suburbs. " +
      "You get another ticket. After 12 weeks of living in your car, the car won't start. " +
    "You come out from the public toilets and discover your car has been towed along with your possessions",
    choices: [
      { text: ">>>", nextScenario: "becomeRoughSleeper" },
    ],
  },
  {
    id: "becomeRoughSleeper",
    text: "A member of the public walks past and notices your distress. " +
      "She asks if she can help and ends up giving you some clothes, a sleeping bag and $50 cash. " +
    "You are now a rough sleeper. ",
    choices: [
      { text: ">>>", nextScenario: "goingToPublicLibrary" },
    ],
  },
  {
    id: "becomeRoughSleeper",
    text: "You develop a pattern of going to the public library in Auckland City. " +
      "As long as you're quiet, they let you stay there and nap. " +
      "You hear stories about emergency housing and decide not to apply. " +
      "It doesn't feel safe.",
    choices: [
      { text: ">>>", nextScenario: "approached2" },
    ],
  },
  {
    id: "approached1",
    text: "Whoops, not so private. Someone jostles you awake and demands you move on, or they'll call the police. " +
      "You walk around for a bit, but are very tired and hungry. You beg for money, but people ignore you. " +
    "Someone gives you $10, but says they know you'll spend it on alcohol. This goes on for a few weeks.",
    choices: [
      { text: ">>>", nextScenario: "badlyBeatenEnding" },
    ],
  },
  {
    id: "badlyBeatenEnding",
    text: "One night you're in the wrong place at the wrong time and are badly beaten. " +
      "You have internal bleeding and no-one to take you hospital. This ending is final.", //FIXME this ending may get removed
    choices: [],
  },
  {
    id: "approached2",
    text: "Someone approaches you one day and it's a Street to Home kaimahi from the Auckland City Mission Te Tāpui Atawhai. " +
      "You don't expect much, but to your surprise they talk about the time they were on the street and how it doesn't have to be final. " +
    "They offer you help and you take it. ",
    choices: [
      { text: ">>>", nextScenario: "TODO!!!!!!" }, //TODO ending
    ],
  },
  {
    id: "reported2",
    text: "The police stop by. After a kōrero, they refer you to the Auckland City Mission Te Tāpui Atawhai. " +
      "At the Mission, a person from their Street to Home team meets with you and talks through your needs. " +
    "They convince you to come with them to transitional housing run by the Mission.",
    choices: [
      { text: ">>>", nextScenario: "offeredPlaceAtHostel" },
    ],
  },
  {
    id: "offeredPlaceAtHostel",
    text: "You are offered a place at a hostel run by the Mission. You get 12 weeks support and they take you to the Calder Health Centre " +
      "run by the Mission to get help with your injuries. After they refer you to a specialist and help you, you ask about " +
      "getting help with alcohol and drugs. You enrol at the Mission Social Detox facility. " +
      "You are also introduced to CADS and they help you with an ongoing support group.",
    choices: [
      { text: ">>>", nextScenario: "communityHousingEnding" },
    ],
  },
  {
    id: "communityHousingEnding",
    text: "You thought things were hopeless, but you got the help you needed to reduce pain " +
      "and a benefit needed to help you with food and rent. The Mission helped you find accommodation " +
      "with a Community Housing Provider, which means a maximum of 25% of your income goes on rent. " +
      "You can't afford luxuries, but you can afford to eat and have a safe place to live. " +
      "Best of all, your wife and kids want to see you again. You're free of the painkillers as the root of your " +
      "pain is being treated at the Calder Health Centre run by the Mission. " +
    "There's hope that you might be able to work again.", //FIXME add additional info when available
    choices: [
      { text: ">>>", nextScenario: "communityHousingEnding" },
    ],
  },
  {
    id: "prisonEnding",
    text: "Your ending: Soon the work you've done for this guy gets you in trouble with the cops. " +
    "You have to go to court and end up being sentenced to prison. ", //FIXME may need additional info
    choices: [],
  },
  {
    id: "refuseFriendsOffer1",
    text: "You decide to seek help from MSD and qualify for Jobseeker Support. " +
      "Between you and your wife's income, it's just enough to pay your rent and buy food. " +
      "There is no extra for petrol, bus fares, kids activities, doctor, dentist, or any holidays or luxures. " +
    "You decide to re-train with help from MSD.",
    choices: [
      { text: ">>>", nextScenario: "agricultureEnding" },
    ],
  },
  {
    id: "refuseFriendsOffer2",
    text: "You decide to seek help from MSD and qualify for Jobseeker Support. " +
      "Between you and your wife's income, it's just enough to pay your rent and buy food. " +
      "There is no extra for anything so when your teeth need emergency work, you get a loan from MSD. " +
      "You keep applying for loans for every emergency and they refuse you on the third time. " +
      "You keep applying for jobs, but can't get anything. " +
      "You and your wife move out and live with your family to help the income go further",
    choices: [
      { text: ">>>", nextScenario: "carBreakdownCantAffordRepair" }, //TODO the scenarios leading from here
    ],
  },
  {
    id: "carBreakdownCantAffordRepair",
    text: "Your car breaks down. Can you afford to repair it?",
    choices: [
      { text: "No, get a loan.", nextScenario: "loanSharks" },
      { text: "No, Borrow from family.", nextScenario: "askFamilyForLoan" },
    ],
  },
  {
    id: "agricultureEnding",
    text: "After retraining in the agriculture sector, you and your family leave the city and you do get another job. " +
      "You're not making your fortune, but you have enough from your Kiwisaver to afford a house in the country town " +
      "and the payments for your mortgage. Your ending turned out well.",
    choices: [],
  },
  {
    id: "start2",
    text: "You are helping fix a friend's roof and fall off breaking your leg, hip and fracturing a vertabrae in your back.  What will happen?",
    choices: [{ text: ">>>", nextScenario: "hospital" }],
  },
  {
    id: "hospital",
    text: "You go into hospital and then ACC pays for rehabilitation. " +
      "You also had personal insurance, including wage protection insurance. " +
      "Your workplace is understanding and you are working from home almost straight away with no difference in pay.",
    choices: [{ text: ">>>", nextScenario: "carBreakdownCanAffordRepair" }],
  },
  {
    id: "carBreakdownCanAffordRepair",
    text: "Your car breaks down. You need it for work. Can you afford to repair it?",
    choices: [{ text: "Yes", nextScenario: "carRepaired" }],
  },
  {
    id: "carRepaired",
    text: "You earn enough to be able to pay the mechanic immediately. " +
    "You get a loan car and it's all sorted quickly with little disruption to your family.",
    choices: [{ text: ">>>", nextScenario: "rentIncrease" }],
  },
  {
    id: "rentIncrease",
    text: "Your rent goes up. Can you pay it?",
    choices: [{ text: "Yes", nextScenario: "canPayRent" },
      { text: "No", nextScenario: "canPayRent" },
    ],
  },
  {
    id: "canPayRent",
    text: "Just kidding, what rent? You either own your own house, or you are a landlord. " +
      "You are aware rental prices are sky high and resolve to start a trust for the kids as soon " +
    "as you can so they have some security in life.",
    choices: [{ text: ">>>", nextScenario: "goodEndingThankful" },
    ],
  },
  {
    id: "goodEndingThankful",
    text: "Your ending: You are thankful with what you have and appropriately horrified by seeing " +
      "items in the news about families living in cars. You may or may not decide to help them. " +
      "You aren't sure how they got that way and you do pay your taxes already, isn't that enough? " +
    "Play again.",
    choices: [{ text: ">>>", nextScenario: "goodEndingThankful" },
    ],
  },
];

const allScenarios = {
  youth: youth,
  woman: woman,
  man: man,
};

export { allScenarios };
