/* ======================================= Decision images ====================================== */
import church from '../../../../assets/decisions/rangatahi/church.svg';
import closeFriend from '../../../../assets/decisions/rangatahi/closeFriend.svg';
import google from '../../../../assets/decisions/rangatahi/google.svg';

import begging from '../../../../assets/decisions/rangatahi/begging.svg';
import noBegging from '../../../../assets/decisions/rangatahi/noBegging.svg';

/* ======================================= Scenario Images ====================================== */

import positiveOutcome from '../../../../assets/scenarioImages/rangatahi/positiveOutcome.svg';
import negativeOutcome from '../../../../assets/scenarioImages/rangatahi/negativeOutcome.svg';

/* ============================================ Mood images =========================================== */

import Sad from '../../../../assets/sidebars/leftSidebar/moods/sad.svg'
import Tearful from '../../../../assets/sidebars/leftSidebar/moods/tearful.svg'
import Calm from '../../../../assets/sidebars/leftSidebar/moods/calm.svg'

import seventeenYearsOld from '../../../../assets/sidebars/leftSidebar/speechBubbles/rangatahi/seventeenYearsOld.svg'
import gettingHungry from '../../../../assets/sidebars/leftSidebar/speechBubbles/rangatahi/gettingHungry.svg'
import soCold from '../../../../assets/sidebars/leftSidebar/speechBubbles/rangatahi/soCold.svg'
import scared from '../../../../assets/sidebars/leftSidebar/speechBubbles/rangatahi/scared.svg'

/* ================================ Images for info carousel =============================== */
import house from '../../../../assets/scenarioImages/rangatahi/outcomeScreen/house.svg';
import humanFigure from '../../../../assets/scenarioImages/rangatahi/outcomeScreen/humanFigure.svg';
import presentation from '../../../../assets/scenarioImages/rangatahi/outcomeScreen/presentation.svg';

import sleep from '../../../../assets/scenarioImages/rangatahi/outcomeScreen/sleep.svg';
import supportiveWorker from '../../../../assets/scenarioImages/rangatahi/outcomeScreen/supportiveWorker.svg';
import rocket from '../../../../assets/scenarioImages/rangatahi/outcomeScreen/rocket.svg';

import anxiety from '../../../../assets/scenarioImages/rangatahi/outcomeScreen/anxiety.svg';
import lifewise from '../../../../assets/scenarioImages/rangatahi/outcomeScreen/lifewise.svg';
import community from '../../../../assets/scenarioImages/rangatahi/outcomeScreen/community.svg';

/* ==================================================================================================== */

export const youth = [
  {
    id: "start",
    mood: {
      image: Sad
    },
    text: [<p>It is a Sunday night.</p>, <p>You're arguing with your mum's partner again</p>,
    <p>But this time, it's more serious and he demands you leave the house immediately.</p>],
    choices: [
      { text: "Next", nextScenario: "startPt2" },
    ],
  },
  {
    id: "startPt2",
    //text: [],
    mood: {
      image: Tearful,
      delay: 1500
    },
    isDialogue: true,
    typewriter: 
      { text: '<p>LAZY!</p><p class="ml-56 mt-16">USELESS!</p><p class="ml-96 mt-16">GET OUT OF MY HOUSE!</p>', style: `text-[80px] flex-col`},
    choices: [
      { text: "Next", nextScenario: "startPt3" },
    ],
  },
  

  /* ===================================== Starting decisions ===================================== */
{
    id: "startPt3",
  //text: [],
  mood: {
    image: Sad,
    speechBubble: seventeenYearsOld
  },
    typewriter: 
    { text: '<p>Where will you go?</p>', style: `justify-center text-[64px]` },
    choices: [
      { image: church, nextScenario: "churchPt1" },
      { image: closeFriend, nextScenario: "closeFriend" },
      { image: google, nextScenario: "startPt2" },
    ],
  },
  

/* ======================================= Church section ======================================= */
  {
    id: "churchPt1",
    text: [<p>You thought you'd be able to find someone you know from the church who could help you, but it is a Sunday night and the church is locked up.</p>,
      <p>You did grab a warm sleeping bad so you find a spot out of the wind & rain and bunk there overnight.</p>
    ],
    choices: [
      {
        text: "Next",
        nextScenario: `churchPt2`,
      },
    ],
  },
  {
    id: "churchPt2",
    mood: {
      image: Sad,
      speechBubble: soCold
    },
    text: [<p>You're on hard concrete and you are still shaking about what happened, so you don't get any sleep</p>,
      <p>Unfortunately, your sleeping bag got wet too. The next morning, the church secretary arrives to find you.</p>
    ],
    choices: [
      {
        text: "Next",
        nextScenario: `churchPt3`,
      },
    ],
  },
  {
    id: "churchPt3",
    isDialogue: true,
    typewriter: {
      text: `<p class='ml-24'>Are you alright? Where are your parents?</p><br/><p class='my-8 relative ml-52'>Poor thing, you're all wet.</p><br/><p>Let's get you warmed up and some food <br/> and you can let me know what happened,</p>`,
      style: `text-[64px]`
    },
    choices: [
      {
        text: "Next",
        nextScenario: `withChurchSecretary`,
      },
    ],
  },
  {
    id: "withChurchSecretary",
    typewriter: {
      text: `<p>You tell her your situation and she starts <br/>phoning around trying to see who can help</p>`,
      style: `text-[64px] justify-center mt-52`
    },
    choices: [
      {
        text: "Next",
        nextScenario: `whoDoesSheCall`,
      },
    ],
  },
  {
    id: "whoDoesSheCall",
    isRandom: true,
    typewriter: {
      text: `<p>Who does she call?</p>`,
      style: `justify-center text-[64px]`
    },
    choices: [
      {
        text: "Flip",
        nextScenario: `churchRandom${Math.floor(Math.random() * 2) + 1}`,
      },
    ],
  },


  {
    id: "churchRandom1",
    typewriter: {
      text: `<p>She calls your mum</p>`, style: `justify-center items-center`
    },
    choices: [{ text: "Next", nextScenario: "secretaryCallsMother" }],
  },
  {
    id: "secretaryCallsMother",
    text: [<p>But it's without your knowledge and your step-dad shows up</p>,
    <p>He smiles at the administrator...</p>],
    
    choices: [
      { text: "Next", nextScenario: `stepdadTalking` },
    ],
  },
  {
    id: "stepdadTalking",
    isDialogue: true,
    typewriter: {
      text: `<p>It's all a big misunderstanding!</p><br/><p>You know how young people are these days.</p>`, style: `ml-36 mt-36 text-[64px]`
    },
    
    choices: [
      { text: "Next", nextScenario: `refuseToGoWithStepdad` },
    ],
  },
  {
    id: "refuseToGoWithStepdad",
    mood: {
      image: Sad,
      speechBubble: scared
    },
    text: [<p>Immediately, you burst into tears and cry out that you refuse to go with him</p>,
      <p>He starts to shout and physically threatens you.</p>,
      <p>Thankfully, this is enough for the administrator to call the police.</p>
    ],
    
    choices: [
      { text: "Next", nextScenario: `policeTakeStepdad` },
    ],
  },
  {
    id: "policeTakeStepdad",
    mood: {
      image: Tearful,
    },
    isEndingIntroNext: true,
    text: [<p>The police arrive and they put him in their car to 'cool off'.</p>,
      <p>They ask if you're ok and listen to your situation.</p>,
      <p>Lifewise is contacted and accommodation is organised for you.</p>
    ],
    choices: [{ text: "Next", nextScenario: "policeTakeStepdadEnding" }],
  },
  {
    id: "churchRandom2",
    text:
      `When she asks where you could go to live you stare at her. You don't know. You were planning to study at university while living at home to save money. She asks if there is another family member you can call. You think your aunty might help but you're not sure. She can be really strict. Should you call her?`,
    choices: [
      { text: "Yes", nextScenario: "callAunty" },
      { text: "No", nextScenario: "dontCallAunty" },
    ],
  },
  {
    id: "callAunty",
    text:
      `You aren't sure what to do, so you call your aunty and she arrives in a flurry of hugs which is nice. After you've told her what happened she gets nervous about how this will affect her relationship with her sister. She says they don't have much room, but can put you up for a month - not forever. She says you are old enough to stand on your own two feet and will expect you to pay board and food. No one has ever told you how much food and board might be and even though you've tried to get a part-time job, there is so much competition that you haven't got one. You feel quite awkward around people sometimes and this hasn't helped in job interviews. You worry that you will never get a job. Should you stay with aunty?`,
    choices: [
      { text: "Not sure", nextScenario: "socialWorkerOptions" },
      { text: "No", nextScenario: "dontStayWithAunt" },
    ],
  },
  {
    id: "dontStayWithAunt",
    text:
      `You know they are well meaning, but you feel very pressured by the church staff to stay with your aunt and uncle. You know in your gut that this is a bad idea. You grab your stuff and run out. You catch a bus going to the city.`,
    choices: [{ text: "Next", nextScenario: "inTheCity" }],
  },
  {
    id: "inTheCity",
    text:
      `In the city, you hang out at a fast food place and realise there are some other teens who are homeless. They are friendly and show you where they are living under a bridge. You need money for food and you're hoping to get work, but can't think how it will be possible, with no easy shower facilities or permanent address. Your friends tell you there might be a cash job around, or if you are willing to go and see Work and Income, you might be able to get the Youth Payment.`,
    choices: [
      { text: "Go to MSD", nextScenario: "goToMSD" },
      {
        text: "Wait - something might turn up?",
        nextScenario: "approachedByMan",
      },
      { text: "Not sure", nextScenario: "policeShowUp" },
    ],
  },
  {
    id: "policeShowUp",
    text:
      `The police show up looking for you because your mum filed a Missing Person's Report. The police decide to take you back home. You ask them not to do this but you aren't able to think of anyone else who can help. They say they will "have a talk" with your parents. When you arrive in the police car, your mum runs out to you but your stepdad tells the police that you are not welcome to live there and gets angry with your mum for filing the report. The police try to reason with him but he stands his ground. The police call a youth housing service and ask them to put you up for the night with an assessment booked for the following day.`,
    choices: [{ text: "Next", nextScenario: "youthHostelEnding1" }],
  },
  {
    id: "goToMSD",
    text:
      `Work and Income refer you to a youth service who helps you get some accommodation and the two forms of ID, so you can get the Youth payment. Next, they also work through details of your living costs and prepare a budget, so you will be eligible for the payment. The money is mostly used up in rent and expenses, but you are left with a little over for food. They explain this payment is only available, if you are studying, or training towards a job. Your dream to be a Doctor is too expensive for you right now. Work and Income find you the opportunity to do an apprenticeship and this will pay and train you at the same time. You decide to take it.`,
    choices: [{ text: "Next", nextScenario: "goingToBeOkayEnding" }],
  },
  {
    id: "approachedByMan",
    text:
      `A man comes up to you and offers a place to live, if you "are nice to him." What now?`,
    choices: [{ text: "Next", nextScenario: "refuseMansOffer" }],
  },
  {
    id: "refuseMansOffer",
    text:
      `You aren't willing to go with him. Your new friends explain that you may have to steal to survive and give you some tips. You steal some food from a dairy a few times, but on the fourth time they are waiting for you and haul you in. The owner says she's sick of kids stealing from her and wants to teach you a lesson. She calls the police.`,
    choices: [
      {
        text: "Flip",
        nextScenario: `policeRandom${Math.floor(Math.random() * 2) + 1}`,
      },
    ],
  },
  {
    id: "policeRandom1",
    text:
      `The police ask if you're okay and listen to your situation. They convince the dairy owner to drop charges. They take you to Auckland City Mission.`,
    choices: [{ text: "Next", nextScenario: "turnedEighteenEnding" }],
  },
  {
    id: "policeRandom2",
    text:
      `The police ask if you're okay and listen to your situation. They try to convince the dairy owner to drop charges but she is sick of shoplifters and insists. They police involve their Youth Aid services who support you into accommodation and work with you to plan your next steps.`,
    choices: [{ text: "Next", nextScenario: "goingToBeOkayEnding" }],
  },
  {
    id: "dontCallAunty",
    text:
      `You think she won't stick up for you with your mum's partner and worry he'll show up at the house and shout at you... and maybe do worse things than just shout. The church administrator asks whether she should call your parents, because "perhaps this was all just a big misunderstanding." She suggests the Pastor could get involved. You start crying and tell her what's been happening in your house. She calls a member of the church, who is a social worker.`,
    choices: [{ text: "Next", nextScenario: "socialWorkerOptions" }],
  },
  {
    id: "socialWorkerOptions",
    text:
      `The Social Worker lays out a few options, if your don't want to stay with your aunty, but says it will take a few days to sort out. He says he may struggle to find a place you can go for tonight. Why don't you go with your aunty for a couple of days and he'll look into some options and meet again in a couple of days to go through them? Go with your aunt?`,
    choices: [
      { text: "Yes", nextScenario: "goWithAunt" },
      { text: "No", nextScenario: "dontStayWithAunt" },
    ],
  },
  {
    id: "goWithAunt",
    text:
      `Your aunt and uncle have a spare room and for a few days you manage to keep to your own room. You pretend nothing has happened, but then your cousin asks your uncle why you are crying all the time. Your aunt keeps asking you if you have a job yet and says she started working a supermarket checkout from age fourteen and then comments about how expensive you are to feed. You feel very unwelcome and stressed.`,
    choices: [
      { text: "Next", nextScenario: "callSocialWorker" },
    ],
  },
  {
    id: "callSocialWorker",
    text:
      `You call the Social Worker and he picks you up and takes you back to the church office. He makes calls on your behalf and finds you a place to stay. You are very close to eighteen years old, so he doesn't call Oranga Tamariki, who would normally get involved with children.`,
    choices: [
      { text: "Next", nextScenario: "goingToBeOkayEnding" }, 
    ],
  },
  /* ===== //Close Friend section ===== */
  {
    id: "closeFriend",
    text: [],
    mood: {
      image: Sad
    },
    typewriter: { text: '<p>Your friend asks their parents<br/> if you can stay with them for a while.</p>', style: `text-[64px] mt-48 justify-center text-center` },
    choices: [
      { text: "Next", nextScenario: `closeFriendPt2` },
    ],
  },
  {
    id: "closeFriendPt2",
    isRandom: true,
    typewriter: { text: '<p>What are they going to say?</p>', style: `justify-center text-[64px]`},
    choices: [
      { text: "Flip", nextScenario: `friendsParentsRandom${Math.floor(Math.random() * 2) + 1}` },
    ],
  },
  {
    id: "friendsParentsRandom1",
    text: [],
    typewriter: { text: '<p>The parents will help you.</p>', style: `justify-center mt-8 text-[64px]` },
    isEndingIntroNext: true,
    postRandom: true,
    image: positiveOutcome,
    choices: [
      { text: "Next", nextScenario: `friendsParentsEnding` },
    ],
  },
  {
    id: "friendsParentsRandom2",
    typewriter: 
      { text: `<p>The parents won't help.</p>`, style: `mt-8 justify-center text-[64px]`},
    postRandom: true,
    image: negativeOutcome,
    choices: [
      { text: "Next", nextScenario: `friendsParentsSympathetic` },
    ],
  },
  {
    id: "friendsParentsSympathetic",
    text: [<p>Your friend's parents are sympathetic.</p>,
    <p>However they don't feel comfortable "overriding your parents' authority" by letting you stay with them.</p>],
    
    choices: [
      { text: "Next", nextScenario: `canSchoolHelp` },
    ],
  },
  {
    id: "canSchoolHelp",
    isRandom: true,
    //text: [],
    typewriter:
      {text: `Can your school help?`, style:`justify-center mt-8 text-[64px]` },
    
    choices: [
      { text: "Flip", nextScenario: `canSchoolHelpRandom${Math.floor(Math.random() * 2) + 1}` },
    ],
  },
  {
    id: "canSchoolHelpRandom1",
    //text: [],
    typewriter: { text: '<p>The school can help.</p>', style: `justify-center mt-8 text-[64px]`},
    postRandom: true,
    image: positiveOutcome,
    choices: [
      { text: "Next", nextScenario: `schoolCounselor` },
    ],
  },
  {
    id: "schoolCounselor",
    mood: {
      image: Calm,
      delay: 2000
    },
    isEndingIntroNext: true,
    text: [<p>Your school counselor wants to ask your parents to come in to resolve the issue.</p>,
      <p>But you share some of the behaviours from your step dad and why you don't feel safe there.</p>,
    <p>She refers you to <a class='text-blue-500' link href="https://www.lifewise.org.nz/our-services/housing-services/youth-housing/">Lifewise</a> youth housing service.</p>],
      choices: [
      { text: "Next", nextScenario: `youthHostelEnding2` },
    ],
  },
  {
    id: "canSchoolHelpRandom2",
    //text: [],
    typewriter: { text: `<p>The school won't help you.</p>`, style: `justify-center mt-8 text-[64px]`},
    postRandom: true,
    image: negativeOutcome,
    choices: [
      { text: "Next", nextScenario: `noCounselor` },
    ],
  },
  {
    id: "noCounselor",
    text: [<p>Your school doesn't have a counselor or social worker you can ask for help.</p>,
    <p> You talk about it with a teacher you trust, but she gets very flustered and doesn't know how to help you.</p>],
      
    choices: [
      { text: "Next", nextScenario: `firstNightOutdoors` },
    ],
  },
  {
    id: "firstNightOutdoors",
    text: [<p>You spend your first night living outdoors - "on the streets."</p>,
    <p>You are hiding in a park, with only a tarpaulin to keep dry.</p>],
    choices: [
      { text: "Next", nextScenario: `moneyRunningOut` },
    ],
  },
  {
    id: "moneyRunningOut",
    text: [<p>You have a bit of money in your account, so you use this to buy food - but it's running out.</p>,
    <p>You find a group of people living in their cars and chat with them about how to get money.</p>,
    <p>One suggests you go into the central city where there are more young people and maybe more people around who might give you money. You decide to do it and take the bus into the city.</p>],
    choices: [
      { text: "Next", nextScenario: `begDecision` },
    ],
  },
  {
    id: "begDecision",
    //text: [],
    mood: {
      image: Sad,
      speechBubble: gettingHungry
    },
      typewriter: 
      { text: '<p>Should you beg for money?</p>', style: `justify-center text-[64px]` },
    choices: [
      { image: begging, nextScenario: `beg` },
      { image: noBegging, nextScenario: `dontBeg` },
    ],
  },
  {
    id: "beg",
    mood: {
      image: Sad,
    },
    text: [<p>People avoid your eyes and make comments about how dirty and skinny you are.</p>,
      <p>Some people give you coins, but you overhear them saying they know it's all going to be spent on drugs.
        Another person says that you're probably making more money than them each day begging.</p>,
      <p>It is the worst experience you've had so far and you feel awful, but you do have some money for food.</p>
    ],
    choices: [
      { text: "Next", nextScenario: `atFastFoodPlace` },
    ],
  },
  {
    id: "dontBeg",
    text: [<p>You hang around some corporate offices because people are more likely to throw away half eaten lunches there.</p>,
      <p>You also find a community pantry and take a few things each day.</p>,
      <p>It's not enough and you are losing too much weight and struggle to have energy to do much.</p>
    ],
    choices: [
      { text: "Next", nextScenario: `scaredAtNight` },
    ],
  },
  {
    id: "atFastFoodPlace",
    //text: [],
    typewriter: {
      text: `<p>When you go into a fast food chain to buy food <br/>and go to the toilet to wash, <br/>they refuse you service and demand you leave.</p>`,
      style: `text-[64px] mt-48`
    },
    choices: [
      { text: "Next", nextScenario: `atFastFoodPlacePt2` },
    ],
  },
  {
    id: "atFastFoodPlacePt2",
    isDialogue: true,
    typewriter: {
      text: `<br/><p class="mt-10 mb-10">You smell!</p><br/><p>Other customers feel uncomfortable because of you</p>`,
      style: `text-[64px]`
    },
    choices: [
      { text: "Next", nextScenario: `outreachTeamNotified` },
    ],
  },
  {
    id: "scaredAtNight",
    text: [<p>You feel really scared at night and try to stay awake as much as possible</p>,
      <p>That means you sleep more during the day and people wak past you.</p>,
      <p>Some comment that you are young and should get a job instead of lying around all day. You actually yell at some of them.</p>
    ],      
    choices: [
      { text: "Next", nextScenario: `yellingAtStrangersPt1` },
    ],
  },
  {
    id: "yellingAtStrangersPt1",
    isDialogue: true,
    typewriter: {
      text: `<p>So give me a job then!</p>`,
      style: `text-[100px] items-center justify-center`
    },      
    choices: [
      { text: "Next", nextScenario: `yellingAtStrangersPt2` },
    ],
  },
  {
    id: "yellingAtStrangersPt2",
    typewriter: {
      text: `<p>He says they only hire University graduates</p>`,
      style: `text-[64px] items-center justify-center`
    },      
    choices: [
      { text: "Next", nextScenario: `outreachTeamNotified` },
    ],
  },
  {
    id: "outreachTeamNotified",
    isEndingIntroNext: true,
    text: [<p>The Auckland City Mission Outreach Team are notified by a member of the public that someone is rough sleeping in the area and they come visit you and have a chat.</p>,
      <p>You have heard of them and trust them and take up their offer of accomodation and support.</p>
    ],
    choices: [
      { text: "Next", nextScenario: `turnedEighteenEnding` },
    ],
  },

  /* ======== Google pathway ======== */
  {
    id: "google",
    text:
      `Thankfully you are over sixteen and able to contact organisations such as Lifewise and places that do have accommodation for someone your age. It's Sunday night, so you couch surf at a friend's for one night. Neither you nor they mention to the parents that you've been kicked out of home.`,
    choices: [
      { text: "Next", nextScenario: `badReaction` },
    ],
  },
  {
    id: "badReaction",
    text:
      `You should start phoning Lifewise immediately the next morning, but you are having some kind of reaction to your parents' rejection and you feel unable to get out of bed. You stay like that for a day and night before your friend's parents challenge you. You can't even talk about it - it's like you've lost your words. Your friend ends up explaining. What happens?`,
    choices: [
      { text: "Flip", nextScenario: `friendsParentsRandom${Math.floor(Math.random() * 2) + 1}` },
    ],
  },

  /* ====================================== Pre-Ending Screen ===================================== */
  {
    id: "endingIntro",
    //text: [],
    isEndingNext: true,
    typewriter: { text: '<p>Every journey to find a <br/> home is different</p>', style: `justify-center mt-32 text-[100px] text-center` },
    choices: [
      { text: "Continue", nextScenario: `` },
    ],
  },


  /* ============= Endings ============ */
  {
    id: "policeTakeStepdadEnding",
    isEnding: true,
    information: [
      {
        image: anxiety,
        subtitle: 'Mental Health',
        text: [<p>Your experiences of rejection from family leads to anxiety and depression.
          However, you receive counselling and helps you process what has happened to you.</p>
        ]
      },
      {
        image: lifewise,
        subtitle: 'Lifewise Aid',
        text: [<p>Your Lifewise Youth Development worker helps you make a plan towards a course of study. You are glad to find out you can still keep going to school.</p>
        ]
      },
      {
        image: community,
        subtitle: 'Community',
        text: [<p>You make some good friends who are also going through their own life struggles and they enable you to look forward and be hopeful for the future.</p>
        ]
      }
    ],
    choices: [
      { text: "Finish", nextScenario: `` },
    ],
  },
  {
    id: "turnedEighteenEnding",
    isEnding: true,
    typewriter: {text: '<p>Your outcome</p><p class="text-5xl text-zinc-300">Click the arrows to read more</p>', style: `justify-center text-[100px] text-center`},
    information: [
      {
        image: house,
        subtitle: 'A Safe Place',
        text: [<p>You've turned eighteen in the last month. The Mission finds you a place to stay that night and you feel safe. You stay in your room for a few days just to sleep and feel okay.</p>]
      },
      {
        image: presentation,
        subtitle: 'A Helpful Keyworker',
        text: [<p>A keyworker is assigned to your case and they listen a lot and patiently you work together on all the decisions and actions you can take. They take you to HomeGround to meet with a helpful MSD (Ministry of Social Development) liaison and you find out how you can study and what benefits you are eligible for.</p>]
      },
      {
        image: rocket,
        subtitle: 'Hopeful Future',
        text: [<p>Your keyworker helps you in getting the ID you need, a bank account and IRD number. You end up in a house boarding with other youth. The future is more hopeful.</p>]
      },
    ],
    choices: [
      { text: "Finish", nextScenario: `` },
    ],
  },
  {
    id: "goingToBeOkayEnding",
    text:
      `You are going to be okay. You have learned the grim reality that family don't always accept you, as well as finding out that New Zealand has a problem with proper help for teenagers and children who are unsafe, or need to leave their homes. But you will receive enough support. You'll make good friends who will help you through this horrible time. Your dream to be a Doctor takes a back seat for a few years, because you have to get a job to support yourself. The future starts to look much brigher and you are able to laugh again.`,
    choices: [
      { text: ">>", nextScenario: `endingScreenTrigger` },
    ],
  },
  {
    id: "youthHostelEnding1",
    text:
      `You turn eighteen in a youth hostel. You are referred to the Auckland City Mission who assign you a keyworker and finds you a permanent place to live. Together you work through next steps, including study options. Meanwhile, your mum contacts you and says she is no longer with her partner. She wants a good relationship with you and you decide you will try this. Your future is looking brighter.`,
    choices: [
      { text: ">>", nextScenario: `endingScreenTrigger` },
    ],
  },
  {
    id: "youthHostelEnding2",
    isEnding: true,
    typewriter: {text: '<p>Your outcome</p><p class="text-5xl text-zinc-300">Click the arrows to read more</p>', style: `justify-center text-[100px] text-center`},
    information: [
      {
        image: sleep,
        subtitle: 'Youth Hostel',
        text: [<p>You end up in a youth hostel with other rangatahi quite far away from your school, friends and family.</p>]
      },
      {
        image: supportiveWorker,
        subtitle: 'Supportive Worker',
        text: [<p>It is a lonely and tough situation, but you start to find your feet and a supportive keyworker helps you to make goals for your future. It's going to work out.</p>]
      },
    ],
    choices: [
      { text: "Finish", nextScenario: `` },
    ],
  },
  {
    id: "friendsParentsEnding",
    isEnding: true,
    typewriter: {text: '<p>Your outcome</p><p class="text-5xl text-zinc-300">Click the arrows to read more</p>', style: `justify-center text-[100px] text-center`},
    information: [
      {
        image: house,
        subtitle: 'A safe place',
        text: [<p>You have safety and a place to stay for now. Your friend's parents are empathetic and want to organise counselling,
          so they contact the school for help.</p>]
      },
      {
        image: presentation,
        subtitle: 'Social Worker',
        text: [<p>The school's Worker tells you about the Youth Payment available from MSD to cover
          cheap board and may mean your friend's parents find it easier to have you while you work things out.</p>]
      },
      {
        image: humanFigure,
        subtitle: 'Find Your Way',
        text: [<p>It's a bit rocky, but you find your way and a few years later you are thriving.</p>]
      },
    ],
    choices: [
      { text: "Finish", nextScenario: `` },
    ],
  },
];
