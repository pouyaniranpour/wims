export const youth = [
  {
    id: "start",
    text: `It is Sunday night. Your mum's partner has just had a go at you and calls you lazy. You are always arguing, but this time it gets more serious and he demands you leave the house immediately. You are 17 years old. Where can you go?`,
    choices: [
      { text: "Local Church", nextScenario: "church" },
      { text: "Close Friend", nextScenario: "closeFriend" }, //TODO this path
      { text: "Google", nextScenario: "google" }, //TODO this path
    ],
  },

  /* ======== Church section ======== */
  {
    id: "church",
    text: [
      `You know some people at church quite well and hope they will help you, but it's a Sunday night, so the church is locked up and there's no one around. You did grab a warm sleeping bag, so you find a spot out of the wind and rain and sleep there overnight. It's cold, you're on hard concrete and you are still shaking about what happened. You don't get any sleep. Your sleeping bag gets wet. The next morning the church secretary arrives to find you. She makes you a cup of tea, gives you breakfast and chats about your situation. She starts phoning around trying to see who can help.`,
    ],
    choices: [
      {
        text: "Next",
        nextScenario: `churchRandom${Math.floor(Math.random() * 2) + 1}`,
      },
    ],
  },
  {
    id: "churchRandom1",
    text: [
      `The Church Administrator calls your mum without your knowledge and your stepdad shows up. He smiles at the administrator and says it was all a big misunderstanding and "you know how young people are these days." You are really scared of him and start crying and saying you refuse to go with him. He starts to shout and physically threatens you. The administrator calls the police.`,
    ],
    choices: [{ text: "Next", nextScenario: "policeTakeStepdadEnding" }],
  },
  {
    id: "churchRandom2",
    text: [
      `When she asks where you could go to live you stare at her. You don't know. You were planning to study at university while living at home to save money. She asks if there is another family member you can call. You think your aunty might help but you're not sure. She can be really strict. Should you call her?`,
    ],
    choices: [
      { text: "Yes", nextScenario: "callAunty" },
      { text: "No", nextScenario: "dontCallAunty" },
    ],
  },
  {
    id: "callAunty",
    text: [
      `You aren't sure what to do, so you call your aunty and she arrives in a flurry of hugs which is nice. After you've told her what happened she gets nervous about how this will affect her relationship with her sister. She says they don't have much room, but can put you up for a month - not forever. She says you are old enough to stand on your own two feet and will expect you to pay board and food. No one has ever told you how much food and board might be and even though you've tried to get a part-time job, there is so much competition that you haven't got one. You feel quite awkward around people sometimes and this hasn't helped in job interviews. You worry that you will never get a job. Should you stay with aunty?`,
    ],
    choices: [
      { text: "Not sure", nextScenario: "socialWorkerOptions" },
      { text: "No", nextScenario: "dontStayWithAunt" },
    ],
  },
  {
    id: "dontStayWithAunt",
    text: [
      `You know they are well meaning, but you feel very pressured by the church staff to stay with your aunt and uncle. You know in your gut that this is a bad idea. You grab your stuff and run out. You catch a bus going to the city.`,
    ],
    choices: [{ text: "Next", nextScenario: "inTheCity" }],
  },
  {
    id: "inTheCity",
    text: [
      `In the city, you hang out at a fast food place and realise there are some other teens who are homeless. They are friendly and show you where they are living under a bridge. You need money for food and you're hoping to get work, but can't think how it will be possible, with no easy shower facilities or permanent address. Your friends tell you there might be a cash job around, or if you are willing to go and see Work and Income, you might be able to get the Youth Payment.`,
    ],
    choices: [
      { text: "Go to MSD", nextScenario: "goToMSD" },
      {
        text: "Wait - something might turn up?",
        nextScenario: "approachedByMan",
      },
      { text: "Not sure", nextScenario: "policeShowUp" }, //TODO this path
    ],
  },
  {
    id: "policeShowUp",
    text: [
      `The police show up looking for you because your mum filed a Missing Person's Report. The police decide to take you back home. You ask them not to do this but you aren't able to think of anyone else who can help. They say they will "have a talk" with your parents. When you arrive in the police car, your mum runs out to you but your stepdad tells the police that you are not welcome to live there and gets angry with your mum for filing the report. The police try to reason with him but he stands his ground. The police call a youth housing service and ask them to put you up for the night with an assessment booked for the following day.`,
    ],
    choices: [{ text: "Next", nextScenario: "youthHostelEnding1" }],
  },
  {
    id: "goToMSD",
    text: [
      `Work and Income refer you to a youth service who helps you get some accommodation and the two forms of ID, so you can get the Youth payment. Next, they also work through details of your living costs and prepare a budget, so you will be eligible for the payment. The money is mostly used up in rent and expenses, but you are left with a little over for food. They explain this payment is only available, if you are studying, or training towards a job. Your dream to be a Doctor is too expensive for you right now. Work and Income find you the opportunity to do an apprenticeship and this will pay and train you at the same time. You decide to take it.`,
    ],
    choices: [{ text: "Next", nextScenario: "goingToBeOkayEnding" }],
  },
  {
    id: "approachedByMan",
    text: [
      `A man comes up to you and offers a place to live, if you "are nice to him." What now?`,
    ],
    choices: [{ text: "Next", nextScenario: "refuseMansOffer" }],
  },
  {
    id: "refuseMansOffer",
    text: [
      `You aren't willing to go with him. Your new friends explain that you may have to steal to survive and give you some tips. You steal some food from a dairy a few times, but on the fourth time they are waiting for you and haul you in. The owner says she's sick of kids stealing from her and wants to teach you a lesson. She calls the police.`,
    ],
    choices: [
      {
        text: "Next",
        nextScenario: `policeRandom${Math.floor(Math.random() * 2) + 1}`,
      },
    ],
  },
  {
    id: "policeRandom1",
    text: [
      `The police ask if you're okay and listen to your situation. They convince the dairy owner to drop charges. They take you to Auckland City Mission.`,
    ],
    choices: [{ text: "Next", nextScenario: "turnedEighteenEnding" }],
  },
  {
    id: "policeRandom2",
    text: [
      `The police ask if you're okay and listen to your situation. They try to convince the dairy owner to drop charges but she is sick of shoplifters and insists. They police involve their Youth Aid services who support you into accommodation and work with you to plan your next steps.`,
    ],
    choices: [{ text: "Next", nextScenario: "goingToBeOkayEnding" }],
  },
  {
    id: "dontCallAunty",
    text: [
      `You think she won't stick up for you with your mum's partner and worry he'll show up at the house and shout at you... and maybe do worse things than just shout. The church administrator asks whether she should call your parents, because "perhaps this was all just a big misunderstanding." She suggests the Pastor could get involved. You start crying and tell her what's been happening in your house. She calls a member of the church, who is a social worker.`,
    ],
    choices: [{ text: "Next", nextScenario: "socialWorkerOptions" }],
  },
  {
    id: "socialWorkerOptions",
    text: [
      `The Social Worker lays out a few options, if your don't want to stay with your aunty, but says it will take a few days to sort out. He says he may struggle to find a place you can go for tonight. Why don't you go with your aunty for a couple of days and he'll look into some options and meet again in a couple of days to go through them? Go with your aunt?`,
    ],
    choices: [
      { text: "Yes", nextScenario: "goWithAunt" },
      { text: "No", nextScenario: "dontStayWithAunt" },
    ],
  },
  {
    id: "goWithAunt",
    text: [
      `Your aunt and uncle have a spare room and for a few days you manage to keep to your own room. You pretend nothing has happened, but then your cousin asks your uncle why you are crying all the time. Your aunt keeps asking you if you have a job yet and says she started working a supermarket checkout from age fourteen and then comments about how expensive you are to feed. You feel very unwelcome and stressed.`,
    ],
    choices: [
      { text: "Next", nextScenario: "callSocialWorker" },
    ],
  },
  {
    id: "callSocialWorker",
    text: [
      `You call the Social Worker and he picks you up and takes you back to the church office. He makes calls on your behalf and finds you a place to stay. You are very close to eighteen years old, so he doesn't call Oranga Tamariki, who would normally get involved with children.`,
    ],
    choices: [
      { text: "Next", nextScenario: "goingToBeOkayEnding" }, 
    ],
  },
  /* ===== //Close Friend section ===== */
  {
    id: "closeFriend",
    text: [
      `Your friend asks their parents if you can stay with them for a while. What are they going to say?`,
    ],
    choices: [
      { text: "Next", nextScenario: `friendsParentsRandom${Math.floor(Math.random() * 2) + 1}` },
    ],
  },
  {
    id: "friendsParentsRandom1",
    text: [
      `The parents will help.`,
    ],
    choices: [
      { text: "Next", nextScenario: `friendsParentsEnding` },
    ],
  },
  {
    id: "friendsParentsRandom2",
    text: [
      `The parents won't help`,
    ],
    choices: [
      { text: "Next", nextScenario: `friendsParentsSympathetic` },
    ],
  },
  {
    id: "friendsParentsSympathetic",
    text: [
      `Your friend's parents are sympathetic, but they don't feel comfortable "overriding your parents' authority" by letting you stay with them. Can your school help?`,
    ],
    choices: [
      { text: "Next", nextScenario: `canSchoolHelpRandom${Math.floor(Math.random() * 2) + 1}` }, //TODO rest of this path
    ],
  },
  {
    id: "canSchoolHelpRandom1",
    text: [
      `The school can help.`,
    ],
    choices: [
      { text: "Next", nextScenario: `schoolCounselor` },
    ],
  },
  {
    id: "schoolCounselor",
    text: [
      `Your school counselor wants to ask your parents to come in to resolve the issue. But you share some of the behaviours from your step dad and why you don't feel safe there. She refers you to Lifewise youth housing service.`,
    ],
    choices: [
      { text: "Next", nextScenario: `youthHostelEnding2` },
    ],
  },
  {
    id: "canSchoolHelpRandom2",
    text: [
      `The school can't help.`,
    ],
    choices: [
      { text: "Next", nextScenario: `noCounselor` },
    ],
  },
  {
    id: "noCounselor",
    text: [
      `Your school doesn't have a counselor or social worker you can ask for help. You talk about it with a teacher you trust, but she gets very flustered and doesn't know how to help you.`,
    ],
    choices: [
      { text: "Next", nextScenario: `firstNightOutdoors` },
    ],
  },
  {
    id: "firstNightOutdoors",
    text: [
      `You spend your first night living outdoors, "on the street" in a park, with a tarpaulin to keep dry.`,
    ],
    choices: [
      { text: "Next", nextScenario: `moneyRunningOut` },
    ],
  },
  {
    id: "moneyRunningOut",
    text: [
      `You have a bit of money in your account, so you use this to buy food, but it's running out. You find a group of people living in their cars and chat with them about how to get money. One suggests you go into the central city where there are more young people and maybe more people around who might give you money. You decide to do it and take the bus into the city. Should you beg for money?`,
    ],
    choices: [
      { text: "Yes", nextScenario: `beg` },
      { text: "No", nextScenario: `dontBeg` },
    ],
  },
  {
    id: "beg",
    text: [
      `You sit on a street corner and make a sign asking for money to eat. People avoid your eyes and make comments about how dirty and skinny you are. Some people give you coins, but you overhear them saying they know it's all going to be spent on drugs. Another person says that you're probably making more money than them each day begging. It is the worst experience you've had so far and you feel awful, but you do have some money for food.`,
    ],
    choices: [
      { text: "Next", nextScenario: `atFastFoodPlace` },
    ],
  },
  {
    id: "dontBeg",
    text: [
      `You hand around some corporate offices, because people are more likely to throw away half eaten lunches there. You also find a community pantry and take a few things each day. It's not enough and you are losing too much weight and struggle to have energy to do much.`,
    ],
    choices: [
      { text: "Next", nextScenario: `scaredAtNight` }, //TODO this path
    ],
  },
  {
    id: "atFastFoodPlace",
    text: [
      `When you go into a fast food chain to buy food and go to the toilet to wash, they refuse you service and demand you leave. You are smelly and make other customers feel uncomfortable.`,
    ],
    choices: [
      { text: "Next", nextScenario: `outreachTeamNotified` },
    ],
  },
  {
    id: "scaredAtNight",
    text: [
      `You feel really scared at nighttime and try to stay awake as much as possible. That means you sleep more in the day and people walk past you. Some comment that you are young and should get a job instead of lying around all day. You actually say "so give me a job then!" to one of them, but he says they only hire University graduates.`,
    ],
    choices: [
      { text: "Next", nextScenario: `outreachTeamNotified` },
    ],
  },
  {
    id: "outreachTeamNotified",
    text: [
      `The Auckland City Mission Outreach Team are notified by a member of the public that someone is rough sleeping in the area and they come visit you and have a chat. You have hear of them and trust them and take up their offer of accomodation and support.`,
    ],
    choices: [
      { text: "Next", nextScenario: `turnedEighteenEnding` },
    ],
  },

  /* ======== Google pathway ======== */
  {
    id: "google",
    text: [
      `Thankfully you are over sixteen and able to contact organisations such as Lifewise and places that do have accommodation for someone your age. It's Sunday night, so you couch surf at a friend's for one night. Neither you nor they mention to the parents that you've been kicked out of home.`,
    ],
    choices: [
      { text: "Next", nextScenario: `badReaction` },
    ],
  },
  {
    id: "badReaction",
    text: [
      `You should start phoning Lifewise immediately the next morning, but you are having some kind of reaction to your parents' rejection and you feel unable to get out of bed. You stay like that for a day and night before your friend's parents challenge you. You can't even talk about it - it's like you've lost your words. Your friend ends up explaining. What happens?`,
    ],
    choices: [
      { text: "Next", nextScenario: `friendsParentsRandom${Math.floor(Math.random() * 2) + 1}` },
    ],
  },



  /* ============= Endings ============ */
  {
    id: "policeTakeStepdadEnding",
    text: [
      `The police take your stepdad and put him in their car to "cool off." They ask if you're okay and listen to your situation. They organise emergency accommodation for you with Lifewise. You have learned the hard way that parents don't always support you. But you also find new friendshipos and get into a course of study that will lead to a good job. You receive counselling that helps you process what has happened to you and enables you to look forward and be hopeful for the future.`,
    ],
    choices: [],
  },
  {
    id: "turnedEighteenEnding",
    text: [
      `You've turned eighteen in the last month. The Mission finds you a place to stay that night and you feel safe. You stay in your room for a few days just to sleep and feel okay. A keyworker is assigned to your case and they listen a lot and patiently you work together on all the decisions and actions you can take. They take you to HomeGround to meet with a helpful MSD (Ministry of Social Development) liaison and you find out how you can study and what benefits you are eligible for. Your keyworker helps you in getting the ID you need, a bank account and IRD number. You end up in a house boarding with other youth. The future is more hopeful.`,
    ],
    choices: [],
  },
  {
    id: "goingToBeOkayEnding",
    text: [
      `You are going to be okay. You have learned the grim reality that family don't always accept you, as well as finding out that New Zealand has a problem with proper help for teenagers and children who are unsafe, or need to leave their homes. But you will receive enough support. You'll make good friends who will help you through this horrible time. Your dream to be a Doctor takes a back seat for a few years, because you have to get a job to support yourself. The future starts to look much brigher and you are able to laugh again.`,
    ],
    choices: [],
  },
  {
    id: "youthHostelEnding1",
    text: [
      `You turn eighteen in a youth hostel. You are referred to the Auckland City Mission who assign you a keyworker and finds you a permanent place to live. Together you work through next steps, including study options. Meanwhile, your mum contacts you and says she is no longer with her partner. She wants a good relationship with you and you decide you will try this. Your future is looking brighter.`,
    ],
    choices: [],
  },
  {
    id: "youthHostelEnding2",
    text: [
      `You end up in a youth hostel with other rangatahi quite far away from your school, friends and family. It is a lonely and tough situation, but you start to find your feet and a supportive keyworker helps you to make goals for your future. It's going to work out.`,
    ],
    choices: [],
  },
  {
    id: "friendsParentsEnding",
    text: [
      `This is where it ends. You have safety and a place to stay for now. Your friend's parents are empathetic and want to organise counselling, so they contact the school for help. The school's Social Worker tells you about the Youth Payment available from MSD. This is enough to cover cheap board and may mean your friend's parents find it easier to have you while you work things out. It's a bit rocky, but you find your way and a few years later you are thriving.`,
    ],
    choices: [],
  },
];
