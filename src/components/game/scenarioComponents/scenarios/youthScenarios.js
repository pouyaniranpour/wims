/* ======================================= Decision images ====================================== */
import church from '../../../../assets/decisions/rangatahi/church.svg';
import closeFriend from '../../../../assets/decisions/rangatahi/closeFriend.svg';
import google from '../../../../assets/decisions/rangatahi/google.svg';

import begging from '../../../../assets/decisions/rangatahi/begging.svg';
import noBegging from '../../../../assets/decisions/rangatahi/noBegging.svg';

import call from '../../../../assets/decisions/rangatahi/call.svg';
import noCall from '../../../../assets/decisions/rangatahi/noCall.svg';

import runAway from '../../../../assets/decisions/rangatahi/runAway.svg';
import goWithAunty from '../../../../assets/decisions/rangatahi/goWithAunty.svg';

import msd from '../../../../assets/decisions/rangatahi/goToMsd.svg';
import wait from '../../../../assets/decisions/rangatahi/wait.svg';
import notSure from '../../../../assets/decisions/rangatahi/notSure.svg';



/* ======================================= Scenario Images ====================================== */

import positiveOutcome from '../../../../assets/scenarioImages/rangatahi/positiveOutcome.svg';
import negativeOutcome from '../../../../assets/scenarioImages/rangatahi/negativeOutcome.svg';

/* ============================================ Mood images =========================================== */

import sad from '../../../../assets/sidebars/leftSidebar/moods/sad.svg'
import tearful from '../../../../assets/sidebars/leftSidebar/moods/tearful.svg'
import calm from '../../../../assets/sidebars/leftSidebar/moods/calm.svg'
import worried from '../../../../assets/sidebars/leftSidebar/moods/worried.svg'
import thinking from '../../../../assets/sidebars/leftSidebar/moods/thinking.svg'
import puzzled from '../../../../assets/sidebars/leftSidebar/moods/puzzled.svg'
import defeated from '../../../../assets/sidebars/leftSidebar/moods/defeated.svg'
import shocked from '../../../../assets/sidebars/leftSidebar/moods/shocked.svg'

import seventeenYearsOld from '../../../../assets/sidebars/leftSidebar/speechBubbles/rangatahi/seventeenYearsOld.svg'
import gettingHungry from '../../../../assets/sidebars/leftSidebar/speechBubbles/rangatahi/gettingHungry.svg'
import soCold from '../../../../assets/sidebars/leftSidebar/speechBubbles/rangatahi/soCold.svg'
import scared from '../../../../assets/sidebars/leftSidebar/speechBubbles/rangatahi/scared.svg'

/* ================================ Images for ending info carousel =============================== */
import house from '../../../../assets/scenarioImages/rangatahi/outcomeScreen/house.svg';
import humanFigure from '../../../../assets/scenarioImages/rangatahi/outcomeScreen/humanFigure.svg';
import presentation from '../../../../assets/scenarioImages/rangatahi/outcomeScreen/presentation.svg';

import sleep from '../../../../assets/scenarioImages/rangatahi/outcomeScreen/sleep.svg';
import supportiveWorker from '../../../../assets/scenarioImages/rangatahi/outcomeScreen/supportiveWorker.svg';
import rocket from '../../../../assets/scenarioImages/rangatahi/outcomeScreen/rocket.svg';

import anxiety from '../../../../assets/scenarioImages/rangatahi/outcomeScreen/anxiety.svg';
import lifewise from '../../../../assets/scenarioImages/rangatahi/outcomeScreen/lifewise.svg';
import community from '../../../../assets/scenarioImages/rangatahi/outcomeScreen/community.svg';

import learningCurve from '../../../../assets/scenarioImages/rangatahi/outcomeScreen/learningCurve.svg';
import work from '../../../../assets/scenarioImages/rangatahi/outcomeScreen/work.svg';
import relationWithMum from '../../../../assets/scenarioImages/rangatahi/outcomeScreen/relationWithMum.svg'

/* ==================================================================================================== */

export const youth = [
  {
    id: "start",
    mood: {
      image: sad
    },
    text: [`It is a Sunday night.`, `You're arguing with your mum's partner again`,
    `But this time, it's more serious and he demands you leave the house immediately.`],
    choices: [
      { text: "Next", nextScenario: "startPt2" },
    ],
  },
  {
    id: "startPt2",
    mood: {
      image: tearful,
      delay: 1500
    },
    isDialogue: true,
    typewriter:
    {
      additionalStyle: `text-[80px] justify-evenly`, 
     paragraphs: [
        { text: 'LAZY!', style: `` },
        { text: 'USELESS!', style: `ml-80` },
        { text: 'GET OUT OF MY HOUSE!', style: `self-end` }
      ]
      },
    choices: [
      { text: "Next", nextScenario: "startPt3" },
    ],
  },
  

  /* ===================================== Starting decisions ===================================== */
{
    id: "startPt3",
  mood: {
    image: worried,
    delay: 0,
    speechBubble: seventeenYearsOld
  },
  typewriter: {
    additionalStyle:  `text-[64px]`,
    paragraphs:[
      { text: 'Where will you go?', style: `text-center` }
    ]
  },
    choices: [
      { image: church, nextScenario: "churchPt1" },
      { image: closeFriend, nextScenario: "closeFriend" },
      { image: google, nextScenario: "google" },
    ],
  },
  

/* ======================================= Church section ======================================= */
  {
    id: "churchPt1",
    mood: {
      image: thinking
    },
    progressObject: {
      count: 2,
      delay: 1000
    },
    text: [`You thought you'd be able to find someone you know from the church who could help you, but it is a Sunday night and the church is locked up.`,
      `You did grab a warm sleeping bag so you find a spot out of the wind & rain and bunk there overnight.`
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
      image: sad,
      speechBubble: soCold
    },
    progressObject: {
      count: 3
    },
    text: [`You're on hard concrete and you are still shaking about what happened, so you don't get any sleep`,
      `Unfortunately, your sleeping bag got wet too. The next morning, the church secretary arrives to find you.`
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
    mood: {
      image: tearful
    },
    typewriter:
    {
      additionalStyle: `text-[64px] justify-evenly`,
      paragraphs: [
      {
        text: `Are you alright? Where are your parents?`,
        style: `ml-24`
      },
      {
        text: `Poor thing, you're all wet.`,
        style: `ml-52`
      },
      {
        text: `Let's get you warmed up and some food \n and you can let me know what happened.`,
        style: ``
      }]},
    choices: [
      {
        text: "Next",
        nextScenario: `withChurchSecretary`,
      },
    ],
  },
  {
    id: "withChurchSecretary",
    mood: {
      image: defeated
    },
    typewriter: {
      additionalStyle: `text-[64px] justify-center`,
      paragraphs:[{
      text: `You tell her your situation and she starts \n phoning around trying to see who can help`,
      style: `text-center`
  }]
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
      additionalStyle: `text-[64px]`,
      paragraphs:[{
      text: `Who does she call?`,
      style: `text-center`
  }]
  },
  choices: [
    {
      text: "",
      nextScenario: `secretaryCallsMotherPt1`,
    },
    {
      text: "",
      nextScenario: `secretaryAsksYou`,
    },
  ],
},


{
  id: "secretaryCallsMotherPt1",
  progressObject: {
    count: 4
  },
  mood: {
    image: puzzled
  },
  typewriter: {
    additionalStyle: `text-[64px] justify-center`,
    paragraphs:[{
    text: `She calls your mum`,
    style: `text-center`
}]
},
  choices: [{ text: "Next", nextScenario: "secretaryCallsMotherPt2" }],
},
{
  id: "secretaryCallsMotherPt2",
  mood: {
    image: shocked
  },
  text: [`But it's without your knowledge and your step-dad shows up`,
  `He smiles at the administrator...`],
  
  choices: [
    { text: "Next", nextScenario: `stepdadTalking` },
  ],
},
{
  id: "stepdadTalking",
  isDialogue: true,
  typewriter: {
    additionalStyle: `text-[64px] justify-evenly`,
    paragraphs: [
      {
    text: `It's all a big misunderstanding!`,
    style: ``
      },
      {
    text: `You know how young people are these days.`,
    style: `text-center`
      }
    ]
},
  choices: [
    { text: "Next", nextScenario: `refuseToGoWithStepdad` },
  ],
},
{
  id: "refuseToGoWithStepdad",
  mood: {
    image: tearful,
    speechBubble: scared
  },
  text: [`Immediately, you burst into tears and cry out that you refuse to go with him`,
    `He starts to shout and physically threatens you.`,
    `Thankfully, this is enough for the administrator to call the police.`
  ],
  
  choices: [
    { text: "Next", nextScenario: `policeTakeStepdad` },
  ],
},
{
  id: "policeTakeStepdad",
  progressObject: {
    count: 6,
    delay: 1500
  },
  mood: {
    image: calm,
    delay: 1500
  },
  isEndingIntroNext: true,
  text: [`The police arrive and they put him in their car to 'cool off'.`,
    `They ask if you're ok and listen to your situation.`,
    `Lifewise is contacted and accommodation is organised for you.`
  ],
  choices: [{ text: "Next", nextScenario: "policeTakeStepdadEnding" }],
},
{
  id: "secretaryAsksYou",
  mood: {
    image: thinking
  },
  progressObject: {
    count: 4
  },
  typewriter: {
    additionalStyle: `text-[64px] justify-center`,
    paragraphs:[
      {
    text: `When she asks where you could go to live\n you just stare at her`,
    style: `text-center`
    },
    ]
},
  choices: [
    { text: "Next", nextScenario: "notSureWhoToCall" },
  ],
},
{
  id: "notSureWhoToCall",
  text: [`You don't know. You were planning to study at university while living at home to save money.`,
    `She asks if there is another family member you can call. You think your aunty might help, but you're not sure.`,
    `She can be really strict.`
  ],
  choices: [
    { text: "Next", nextScenario: "callAuntyDecision" },
  ],
},
{
  id: "callAuntyDecision",
  mood: {
    image: worried
  },
  typewriter: {
    additionalStyle: `text-[64px]`,
    paragraphs:[
      {
    text: `Should you call her?`,
    style: `text-center`
    },
    ]
},
  choices: [
    { image: call, nextScenario: "callAuntyPt1" },
    { image: noCall, nextScenario: "dontCallAunty" },
  ],
},
{
  id: "callAuntyPt1",
  mood: {
    image: worried
  },
  progressObject: {
    count: 5
  },
  text: [`You aren't sure what to do, so you call your aunty and she arrives in a flurry of hugs, which is nice.`,
    `After you've told her what happened she gets nervous about how this will affect her relationship with her sister.
      She says they don't have much room, but can put you up for a month - not forever.`,
    `She says you are old enough to stand on your own two feet and will expect you to pay board and food.`
  ],
  choices: [
    { text: "Next", nextScenario: "callAuntyPt2" },
  ],
},
{
  id: "callAuntyPt2",
  mood: {
    image: sad
  },
  text: [`No one has ever told you how much food and board might be and even though you've tried to get a part-time job, there is so much competition that you haven't got one.`,
    `You feel quite awkward around people sometimes and this hasn't helped in job interviews.`,
    `You worry that you will never get a job.`
  ],
  choices: [
    { text: "Next", nextScenario: "goWithAuntyDecision" },
  ],
},
{
  id: "trustYourGut",
  mood: {
    image: thinking
  },
  progressObject: {
    count: 4
  },
  text: [`You know they are well-meaning, but you feel very pressured by the church staff to stay with your aunt and uncle.`,
    `You just know in your gut that this is a bad idea.`,
    `You grab your stuff and run out. You catch a bus going into the city.`
  ],
  choices: [{ text: "Next", nextScenario: "inTheCity" }],
},
{
  id: "inTheCity",
  text: [`In the city, you hang out at a fast food place and realise there are some other teens there who are homeless.`,
    `They are friendly and show you where they are living under a bridge.`,
    `You need money for food and you're hoping to get work, but can't think how, with no easy shower facilities or permanent address.`
  ],
  choices: [
    { text: "Next", nextScenario: "talkingToYouth" },
  ],
},
{
  id: "talkingToYouth",
  isDialogue: true,
  typewriter: {
    additionalStyle: `text-[64px] justify-evenly`,
    paragraphs:[
      {
    text: `If you're lucky, a cash job might come up.`,
    style: `text-center`
    },
      {
    text: `Or, you could go see work and income?`,
    style: `text-center`
    },
      {
    text: `You might be able to get the youth payment`,
    style: `text-center`
    },
    ]
},
  choices: [
    { text: "Next", nextScenario: "goToMSD_Decision" },
  ],
},
{
  id: "goToMSD_Decision",
  mood: {
    image: worried,
  },
  typewriter: {
    additionalStyle: `text-[64px]`,
    paragraphs:[
      {
    text: `What is your decision?`,
    style: `text-center`
    },
    ]
},
  choices: [
    { image: msd, nextScenario: "goToMSD" },
    { image: wait, nextScenario: "approachedByMan"},
    { image: notSure, nextScenario: "policeShowUp" },
  ],
},
{
  id: "policeShowUp",
  progressObject: {
    count: 5
  },
  mood: {
    image: sad
  },
  typewriter: {
    additionalStyle: `text-[64px] justify-center`,
    paragraphs:[
      {
    text: `The Police show up`,
    style: `text-center`
    },
    ]
},
  choices: [{ text: "Next", nextScenario: "takenBackHome" }],
},
{
  id: "takenBackHome",
  progressObject: {
    count: 6
  },
  text: [`Your mum filed a Missing Person's Report.`,
    `The police decide to take you back home.`,
    `You ask them not to do this, but you aren't able to think of anyone else who can help. They say they will "have a talk" with your parents.`
  ],
  choices: [{ text: "Next", nextScenario: "greetedByStepdad" }],
},
{
  id: "greetedByStepdad",
  progressObject: {
    count: 7,
    delay: 2500
  },
  mood: {
    image: calm,
    delay: 2000
  },
  isEndingIntroNext: true,
  text: [`When you arrive in the police car, your mum runs out to you, but your stepdad tells the police that you are not welcome to live there and gets angry with your mum for filing the report.`,
    `The police try to reason with him, but he stands his ground.`,
    `The police call a youth housing service and ask them to put you up for the night with an assessment booked for the following day.`
  ],
  choices: [{ text: "Next", nextScenario: "youthHostelEnding1" }],
},
{
  id: "goToMSD",
  mood: {
    image: calm
  },
  progressObject: {
    count: 6
  },
  text: [`Work and Income refer you to a youth service who helps you get some accommodation and the two forms of ID, so you can get the Youth Payment.`,
    `Next, they also work through details of your living costs and prepare a budget, so you will be eligible for the payment`,
    `The money is mostly used up in rent and expenses, but you are left with a little over for food.`
  ],
  choices: [{ text: "Next", nextScenario: "goToMSD_Pt2" }],
},
{
  id: "goToMSD_Pt2",
  text: [`They explain this payment is only available, if you are studying, or training towards a job.`,
    `Your dream to be a doctor is too expensive for you right now.`,
    `Work and Income find you the opportunity to do an apprenticeship and this will pay you and train you at the same time.`
  ],
  choices: [{ text: "Next", nextScenario: "goToMSD_Pt3" }],
},
{
  id: "goToMSD_Pt3",
  progressObject: {
    count: 7
  },
  isEndingIntroNext: true,
  typewriter: {
    additionalStyle: `text-[64px] justify-center`,
    paragraphs:[
      {
    text: `You decide to take it. You will be Okay.`,
    style: `text-center`
    },
    ]
},
  choices: [{ text: "Next", nextScenario: "goingToBeOkayEnding" }],
},
{
  id: "approachedByMan",
  mood: {
    image: thinking
  },
  progressObject: {
    count: 5
  },
  typewriter: {
    additionalStyle: `text-[64px] justify-center`,
    paragraphs:[
      {
    text: `A man suddenly approaches you`,
    style: `text-center`
    },
    ]
},
  choices: [{ text: "Next", nextScenario: "mansOffer" }],
},
{
  id: "mansOffer",
  isDialogue: true,
  typewriter: {
    additionalStyle: `text-[64px] justify-evenly`,
    paragraphs:[
      {
    text: `You looking for a place to stay?`,
    style: ``
    },
      {
    text: `You can stay at mine`,
    style: `text-center`
    },
      {
    text: `If you are nice to me`,
    style: `self-end`
    },
    ]
},
  choices: [{ text: "Next", nextScenario: "refuseMansOffer" }],
},
{
  id: "refuseMansOffer",
  mood: {
    image: shocked,
    delay: 1500
  },
  text: [`You aren't willing to go with him.`,
    `Your new friends explain that you may have to steal to survive and give you some tips.`,
    `You steal some food from a dairy a few times, but on the fourth time they are waiting for you and haul you in.`
  ],
  choices: [
    {
      text: "Next",
      nextScenario: `dairyOwnerSpeaking`,
    },
  ],
},
{
  id: "dairyOwnerSpeaking",
  isDialogue: true,
  typewriter: {
    additionalStyle: `text-[64px] justify-evenly`,
    paragraphs:[
      {
    text: `I'm sick of you kids stealing from me`,
    style: ``
    },
      {
    text: `I'll teach you a lesson.`,
    style: `self-end`
    },
    ]
},
  choices: [
    {
      text: "Next",
      nextScenario: `policeCalled`,
    },
  ],
},
{
  id: "policeCalled",
  isRandom: true,
  typewriter: {
    additionalStyle: `text-[64px]`,
    paragraphs:[
      {
    text: `She calls the police. What do they say?`,
    style: `text-center`
    },
    ]
},
  choices: [
    {
      text: "",
      nextScenario: `chargesDropped`,
    },
    {
      text: "",
      nextScenario: `chargesNotDropped`,
    },
  ],
},
{
  id: "chargesDropped",
  progressObject: {
    count: 6
  },
  mood: {
    calm,
    delay: 1000
  },
  typewriter: {
    additionalStyle: `text-[64px] justify-center`,
    paragraphs:[
      {
    text: `The police are sympathetic and convince\n the dairy owner to drop the charges`,
    style: `text-center`
    },
    ]
},  
  choices: [{ text: "Next", nextScenario: "policeSympathetic" }],
},
{
  id: "policeSympathetic",
  isEndingIntroNext: true,
  text: [`The police ask if you're okay and listen to your situation.`,
  `Then they take you to Auckland City Mission.`],
  choices: [{ text: "Next", nextScenario: "turnedEighteenEnding" }],
},
{
  id: "chargesNotDropped",
  typewriter: {
    additionalStyle: `text-[64px] justify-center`,
    paragraphs:[
      {
    text: `The police are sympathetic,\n but the dairy owner is not`,
    style: `text-center`
    },
    ]
}, 
  choices: [{ text: "Next", nextScenario: "dairyOwnerUnsympathetic" }],
},
{
  id: "dairyOwnerUnsympathetic",
  mood: {
    image: calm,
    delay: 1000
  },
  text: [`The police ask if you're okay and listen to your situation.`,
    `Although the police try to convince the dairy owner to drop charges, she insists and says she is sick of shoplifters.`,
  `The Police involve their Youth Aid services, who support you into accommodation and work with you to plan your next steps.`],
  choices: [{ text: "Next", nextScenario: "goingToBeOkayEnding" }],
},
{
  id: "dontCallAunty",
  mood: {
    image: puzzled
  },
  progressObject: {
    count: 5
  },
  text: [`You think she won't stick up for you with your mum's partner and worry he'll show up at the house and shout at you - and maybe do worse things than just shout.`,
    `The church administrator asks whether she should call your parents, because "perhaps this was all just a big misunderstanding." She suggests the Pastor could get involved.`,
    `You start crying and tell her what's been happening in your house. She calls a member of the church who is a social worker.`
  ],
  choices: [{ text: "Next", nextScenario: "socialWorker" }],
},
{
  id: "socialWorker",
  mood: {
    image: sad
  },
  progressObject: {
    count: 6
  },
  text: [`The Social Worker lays out a few options if you don't want to stay with your aunty, but says it will take a few days to sort out.`,
    `He says he may struggle to find a place you can go for tonight.`
  ],
  choices: [
    { text: "Next", nextScenario: "socialWorkerSpeaking" },
  ],
},
{
  id: "socialWorkerSpeaking",
  isDialogue: true,
  typewriter: {
    additionalStyle: `text-[64px] justify-evenly`,
    paragraphs:[
      {
    text: `Why don't you go with your aunty for a couple of days?`,
    style: ``
    },
      {
    text: `I'll look into some options`,
    style: ``
    },
      {
    text: `And we can meet up again in a couple of days\n to go through them?`,
    style: ``
    },
    ]
}, 
  choices: [
    { text: "Next", nextScenario: "goWithAuntyDecision" },
  ],
},
{
  id: "goWithAuntyDecision",
  typewriter: {
    additionalStyle: `text-[64px]`,
    paragraphs:[
      {
    text: `Should you stay with Aunty?`,
    style: `text-center`
    },
    ]
},
  choices: [
    { image: goWithAunty, nextScenario: "goWithAunty" },
    { image: runAway, nextScenario: "trustYourGut" },
  ],
},
{
  id: "goWithAunty",
  mood: {
    image: tearful
  },
  progressObject: {
    count: 6
  },
  text: [`Your aunt and uncle have a spare room and for a few days you manage to keep to your own room.`,
    `You all pretend nothing has happened, but then your cousin asks your uncle why you are crying all the time.`,
    `Your aunt keeps asking you if you have a job yet.`
  ],
  choices: [
    { text: "Next", nextScenario: "auntyTalking" },
  ],
},
{
  id: "auntyTalking",
  isDialogue: true,
  typewriter: {
    additionalStyle: `text-[64px] justify-evenly items-center`,
    paragraphs:[
      {
    text: `You're so expensive to feed`,
    style: ``
    },
      {
    text: `You know, when I was 14,\n I started working at a supermarket`,
    style: ``
    },
      {
    text: `Kids these days don't know hard work`,
    style: ``
    },
    ]
},
  choices: [
    { text: "Next", nextScenario: "unwelcomeAndStressed" },
  ],
},
{
  id: "unwelcomeAndStressed",
  typewriter: {
    additionalStyle: `text-[64px] justify-center`,
    paragraphs:[
      {
    text: `You are starting to feel unwelcome and stressed`,
    style: `text-center`
    },
    ]
},
  choices: [
    { text: "Next", nextScenario: "callSocialWorker" },
  ],
},
{
  id: "callSocialWorker",
  mood: {
    image: calm,
    delay: 1500
  },
  isEndingIntroNext: true,
  text: [`You call the Social Worker and he picks you up and takes you back to the church office.`,
    `He makes calls on your behalf and finds you a place to stay.`,
    `You are very close to 18 years old, so he calls Lifewise for help.`
  ],
  choices: [
    { text: "Next", nextScenario: "goingToBeOkayEnding" }, 
  ],
},
/* ===== //Close Friend section ===== */
{
  id: "closeFriend",
  mood: {
    image: thinking
  },
  progressObject: {
    count: 2,
  },
  typewriter: {
    additionalStyle: `text-[64px] justify-center`,
    paragraphs:[
      {
    text: `Your friend asks their parents\n if you can stay with them for a while.`,
    style: `text-center`
    },
    ]
},
  choices: [
    { text: "Next", nextScenario: `closeFriendPt2` },
  ],
},
{
  id: "closeFriendPt2",
  isRandom: true,
  typewriter: {
    additionalStyle: `text-[64px]`,
    paragraphs:[
      {
    text: `What are they going to say?`,
    style: `text-center`
    },
    ]
},
  choices: [
    { text: "", nextScenario: `parentsWillHelp` },
    { text: "", nextScenario: `parentsWontHelp` },
  ],
},
{
  id: "parentsWillHelp",
  progressObject: { count: 7, delay: 1000 },
  mood: {
    image: calm
  },
  typewriter: {
    additionalStyle: `text-[64px]`,
    paragraphs:[
      {
    text: `The parents will help you`,
    style: `text-center`
    },
    ]
},
  isEndingIntroNext: true,
  postRandom: true,
  image: positiveOutcome,
  choices: [
    { text: "Next", nextScenario: `friendsParentsEnding` },
  ],
},
{
  id: "parentsWontHelp",
  progressObject: { count: 3 },
  mood: {
    image: tearful
  },
  typewriter: {
    additionalStyle: `text-[64px]`,
    paragraphs:[
      {
    text: `The parents won't help`,
    style: `text-center`
    },
    ]
},
  postRandom: true,
  image: negativeOutcome,
  choices: [
    { text: "Next", nextScenario: `friendsParentsSympathetic` },
  ],
},
{
  id: "friendsParentsSympathetic",
  mood: {
    image: sad
  },
  text: [`Your friend's parents are sympathetic.`,
  `However they don't feel comfortable "overriding your parents' authority" by letting you stay with them.`],
  
  choices: [
    { text: "Next", nextScenario: `canSchoolHelp` },
  ],
},
{
  id: "canSchoolHelp",
  isRandom: true,
    typewriter: {
      additionalStyle: `text-[64px]`,
      paragraphs:[
        {
      text: `Can your school help?`,
      style: `text-center`
      },
      ]
  },
  choices: [
    { text: "", nextScenario: `schoolCanHelp` },
    { text: "", nextScenario: `schoolCantHelp` },
  ],
},
{
  id: "schoolCanHelp",
  progressObject: { count: 5 },
  typewriter: {
    additionalStyle: `text-[64px]`,
    paragraphs:[
      {
    text: `The school can help.`,
    style: `text-center`
    },
    ]
},
  postRandom: true,
  image: positiveOutcome,
  choices: [
    { text: "Next", nextScenario: `schoolCounselor` },
  ],
},
{
  id: "schoolCounselor",
  progressObject: {
    count: 7,
    delay: 2000
  },
  mood: {
    image: calm,
    delay: 2000
  },
  isEndingIntroNext: true,
  text: [`Your school counselor wants to ask your parents to come in to resolve the issue.`,
    `But you share some of the behaviours from your step dad and why you don't feel safe there.`,
  `She refers you to Lifewise youth housing service.`],
    choices: [
    { text: "Next", nextScenario: `youthHostelEnding2` },
  ],
},
{
  id: "schoolCantHelp",
  mood: {
    image: shocked
  },
  progressObject: {
    count: 5,
  },
  typewriter: {
    additionalStyle: `text-[64px]`,
    paragraphs:[
      {
    text: `The school won't help you.`,
    style: `text-center`
    },
    ]
},
  postRandom: true,
  image: negativeOutcome,
  choices: [
    { text: "Next", nextScenario: `noCounselor` },
  ],
},
{
  id: "noCounselor",
  text: [`Your school doesn't have a counselor or social worker you can ask for help.`,
  ` You talk about it with a teacher you trust, but she gets very flustered and doesn't know how to help you.`],
    
  choices: [
    { text: "Next", nextScenario: `firstNightOutdoors` },
  ],
},
{
  id: "firstNightOutdoors",
  text: [`You spend your first night living outdoors - "on the streets."`,
  `You are hiding in a park, with only a tarpaulin to keep dry.`],
  choices: [
    { text: "Next", nextScenario: `moneyRunningOut` },
  ],
},
{
  id: "moneyRunningOut",
  text: [`You have a bit of money in your account, so you use this to buy food - but it's running out.`,
  `You find a group of people living in their cars and chat with them about how to get money.`,
  `One suggests you go into the central city where there are more young people and maybe more people around who might give you money. You decide to do it and take the bus into the city.`],
  choices: [
    { text: "Next", nextScenario: `begDecision` },
  ],
},
{
  id: "begDecision",
  mood: {
    image: worried,
    speechBubble: gettingHungry
  },
  typewriter: {
    additionalStyle: `text-[64px]`,
    paragraphs:[
      {
    text: `Should you beg for money?`,
    style: `text-center`
    },
    ]
},
  choices: [
    { image: begging, nextScenario: `beg` },
    { image: noBegging, nextScenario: `dontBeg` },
  ],
},
{
  id: "beg",
  mood: {
    image: tearful,
  },
  progressObject: {
    count: 6
  },
  text: [`People avoid your eyes and make comments about how dirty and skinny you are.`,
    `Some people give you coins, but you overhear them saying they know it's all going to be spent on drugs.
      Another person says that you're probably making more money than them each day begging.`,
    `It is the worst experience you've had so far and you feel awful, but you do have some money for food.`
  ],
  choices: [
    { text: "Next", nextScenario: `atFastFoodPlace` },
  ],
},
{
  id: "dontBeg",
  mood: {
    image: sad
  },
  text: [`You hang around some corporate offices because people are more likely to throw away half eaten lunches there.`,
    `You also find a community pantry and take a few things each day.`,
    `It's not enough and you are losing too much weight and struggle to have energy to do much.`
  ],
  choices: [
    { text: "Next", nextScenario: `scaredAtNight` },
  ],
},
{
  id: "atFastFoodPlace",
  text: [`When you go into a fast food chain to buy food and go to the toilet and wash, they refuse you service and demand you leave.`,
    `They say you smell and make other customers feel uncomfortable.`
  ],
  choices: [
    { text: "Next", nextScenario: `outreachTeamNotified` },
  ],
},
{
  id: "scaredAtNight",
  progressObject: {
    count: 6
  },
  text: [`You feel really scared at night and try to stay awake as much as possible`,
    `That means you sleep more during the day and people walk past you.`,
    `Some comment that you are young and should get a job instead of lying around all day. You actually yell at some of them.`
  ],      
  choices: [
    { text: "Next", nextScenario: `yellingAtStrangersPt1` },
  ],
},
{
  id: "yellingAtStrangersPt1",
  isDialogue: true,
  typewriter: {
    additionalStyle: `text-[100px] justify-center`,
    paragraphs:[
      {
    text: `So give me a job then!`,
    style: `text-center`
    },
    ]
},
  choices: [
    { text: "Next", nextScenario: `yellingAtStrangersPt2` },
  ],
},
{
  id: "yellingAtStrangersPt2",
  typewriter: {
    additionalStyle: `text-[64px] justify-center`,
    paragraphs:[
      {
    text: `He says they only hire University graduates`,
    style: `text-center`
    },
    ]
},
  choices: [
    { text: "Next", nextScenario: `outreachTeamNotified` },
  ],
},
{
  id: "outreachTeamNotified",
  progressObject: {
    count: 7,
    delay: 1500
  },
  mood: {
    image: calm,
    delay: 1500
  },
  isEndingIntroNext: true,
  text: [`The Auckland City Mission Outreach Team are notified by a member of the public that someone is rough sleeping in the area and they come visit you and have a chat.`,
    `You have heard of them and trust them and take up their offer of accomodation and support.`
  ],
  choices: [
    { text: "Next", nextScenario: `turnedEighteenEnding` },
  ],
},

  /* ======== Google pathway ======== */
  {
    id: "google",
    mood: {
      image: puzzled
    },
    progressObject: {
      count: 2
    },
    typewriter: {
      additionalStyle: `text-[64px] justify-evenly`,
      paragraphs:[
        {
      text: `Thankfully you are over 16!`,
      style: `text-center`
      },
        {
      text: `You are able to contact organisations\n such as lifewise by yourself.`,
      style: `text-center`
      },
      ]
  },
    choices: [
      { text: "Next", nextScenario: `couchSurfing` },
    ],
  },
  {
    id: "couchSurfing",
    mood: {
      image: thinking
    },
    text: [`You've asked your friend if you could couch surf at their place for one night while you prepare to contact Lifewise.`,
      `Neither you, nor they mention to the parents that you've been kicked out of your home.`
    ],
    choices: [
      { text: "Next", nextScenario: `badReaction` },
    ],
  },
  {
    id: "badReaction",
    mood: {
      image: defeated
    },
    text: [`You should start phoning Lifewise immediately the next morning, but you are having some kind of reaction to your parents' rejection and you feel unable to get out of bed.`,
      `You stay like that for a day and night before your friend's parents challenge you.`,
      `You can't even talk about it - it's like you've lost your words. Your friend ends up explaining your situation.`
    ],
    choices: [
      { text: "Next", nextScenario: `friendExplainsSituation` },
    ],
  },
  {
    id: "friendExplainsSituation",
    mood: {
      image: worried
    },
    isRandom: true,
      typewriter: {
        additionalStyle: `text-[64px]`,
        paragraphs:[
          {
        text: `What happens?`,
        style: `text-center`
        },
        ]
    },
    choices: [
      { text: "", nextScenario: `parentsWillHelp` },
      { text: "", nextScenario: `parentsWontHelp` },
    ],
  },

/* ====================================== Pre-Ending Screen ===================================== */
{
  id: "endingIntro",
  progressObject: {
    count: 7
  },
  mood: {
    image: calm
  },
  isEndingNext: true,
  typewriter: {
    additionalStyle: `text-[100px] justify-center`,
    paragraphs:[{
    text: `Every journey to find a\n home is different`,
    style: `text-center`
}]
},
  
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
      text: [`Your experiences of rejection from family leads to anxiety and depression.
        However, you receive counselling and this helps you process what has happened to you.`
      ]
    },
    {
      image: lifewise,
      subtitle: 'Lifewise Aid',
      text: [`Your Lifewise Youth Development worker helps you make a plan towards a course of study. You are glad to find out you can still keep going to school.`
      ]
    },
    {
      image: community,
      subtitle: 'Community',
      text: [`You make some good friends who are also going through their own life struggles and they enable you to look forward and be hopeful for the future.`
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
  information: [
    {
      image: house,
      subtitle: 'A Safe Place',
      text: [`You've turned eighteen in the last month. The Mission finds you a place to stay that night and you feel safe. You stay in your room for a few days just to sleep and feel okay.`]
    },
    {
      image: presentation,
      subtitle: 'A Helpful Keyworker',
      text: [`A keyworker is assigned to your case and they listen a lot and patiently you work together on all the decisions and actions you can take. They take you to Home Ground to meet with a helpful MSD (Ministry of Social Development) liaison and you find out how you can study and what benefits you are eligible for.`]
    },
    {
      image: rocket,
      subtitle: 'Hopeful Future',
      text: [`Your keyworker helps you in getting the ID you need, a bank account and IRD number. You end up in a house boarding with other youth. The future is more hopeful.`]
    },
  ],
  choices: [
    { text: "Finish", nextScenario: `` },
  ],
},
{
  id: "goingToBeOkayEnding",
  isEnding: true,
  information: [
    {
      image: learningCurve,
      subtitle: 'Learning Curve',
      text: [`You are going to be OK. You have learned the grim reality that family don't always accept you, as well as finding out that NZ has a problem with proper help for teenagers and children who are unsafe, or need to leave their homes.`]
    },
    {
      image: community,
      subtitle: 'Community',
      text: [`You make some good friends, who are also going through their own life struggles and they enable you to look forward and be hopeful for the future.`]
    },
    {
      image: work,
      subtitle: 'Work',
      text: [`Your dream to be a doctor takes a back seat for a few years, because you have to get a job to support yourself, but the future starts to look much brighter and you are able to laugh again.`]
    },
  ],
  choices: [
    { text: "Finish", nextScenario: `` },
  ],
},
{
  id: "youthHostelEnding1",
  isEnding: true,
  information: [
    {
      image: sleep,
      subtitle: 'Youth Hostel',
      text: [`You turn 18 in a youth hostel with other rangatahi quite far away from your school, friends and family.`]
    },
    {
      image: presentation,
      subtitle: 'Keyworker',
      text: [`You are referred to the Auckland City Mission who assign you a keyworker and finds you a permanent place to live. Together you work through your next steps, including study options.`]
    },
    {
      image: relationWithMum,
      subtitle: 'Relationship with Mum',
      text: [`Meanwhile, your mum contacts you and says she is no longer with her partner. She wants a good relationship with you and you decide you will try this. Your future is looking brighter.`]
    },
  ],
  choices: [
    { text: "Finish", nextScenario: `` },
  ],
},
{
  id: "youthHostelEnding2",
  isEnding: true,
  information: [
    {
      image: sleep,
      subtitle: 'Youth Hostel',
      text: [`You end up in a youth hostel with other rangatahi quite far away from your school, friends and family.`]
    },
    {
      image: supportiveWorker,
      subtitle: 'Supportive Worker',
      text: [`It is a lonely and tough situation, but you start to find your feet and a supportive keyworker helps you to make goals for your future. It's going to work out.`]
    },
  ],
  choices: [
    { text: "Finish", nextScenario: `` },
  ],
},
{
  id: "friendsParentsEnding",
  isEnding: true,
  information: [
    {
      image: house,
      subtitle: 'A safe place',
      text: [`You have safety and a place to stay for now. Your friend's parents are empathetic and want to organise counselling,
        so they contact the school for help.`]
    },
    {
      image: presentation,
      subtitle: 'Social Worker',
      text: [`The school's Social Worker tells you about the Youth Payment available from MSD to cover
        cheap board and may mean your friend's parents find it easier to have you while you work things out.`]
    },
    {
      image: humanFigure,
      subtitle: 'Find Your Way',
      text: [`It's a bit rocky, but you find your way and a few years later you are thriving.`]
    },
  ],
  choices: [
    { text: "Finish", nextScenario: `` },
  ],
},
];
