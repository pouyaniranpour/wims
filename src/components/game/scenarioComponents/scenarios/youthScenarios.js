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
      fontSize: `text-[80px]`, 
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
    fontSize:  `text-[64px]`,
    paragraphs:[
      { text: 'Where will you go?', style: `text-center relative bottom-64` }
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
      fontSize: `text-[64px]`,
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
        text: `Let's get you warmed up and some food and you can let me know what happened.`,
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
      fontSize: `text-[64px]`,
      paragraphs:[{
      text: `You tell her your situation and she starts phoning around trying to see who can help`,
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
      fontSize: `text-[64px]`,
      paragraphs:[{
      text: `Who does she call?`,
      style: `text-center relative bottom-64`
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
    fontSize: `text-[64px]`,
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
    fontSize: `text-[64px]`,
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
    fontSize: `text-[64px]`,
    paragraphs:[
      {
    text: `When she asks where you could go to live\n you just stare at her.`,
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
    text: `Should you call her?`, style: `text-[64px] items-center mt-24`
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
  text: [<p>You aren't sure what to do, so you call your aunty and she arrives in a flurry of hugs, which is nice.</p>,
    <p>After you've told her what happened she gets nervous about how this will affect her relationship with her sister.
      She says they don't have much room, but can put you up for a month - not forever.</p>,
    <p>She says you are old enough to stand on your own two feet and will expect you to pay board and food.</p>
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
  text: [<p>No one has ever told you how much food and board might be and even though you've tried to get a part-time job, there is so much competition that you haven't got one.</p>,
    <p>You feel quite awkward around people sometimes and this hasn't helped in job interviews.</p>,
    <p>You worry that you will never get a job.</p>
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
  text: [<p>You know they are well-meaning, but you feel very pressured by the church staff to stay with your aunt and uncle.</p>,
    <p>You just know in your gut that this is a bad idea.</p>,
    <p>You grab your stuff and run out. You catch a bus going into the city.</p>
  ],
  choices: [{ text: "Next", nextScenario: "inTheCity" }],
},
{
  id: "inTheCity",
  text: [<p>In the city, you hang out at a fast food place and realise there are some other teens there who are homeless.</p>,
    <p>They are friendly and show you where they are living under a bridge.</p>,
    <p>You need money for food and you're hoping to get work, but can't think how, with no easy shower facilities or permanent address.</p>
  ],
  choices: [
    { text: "Next", nextScenario: "talkingToYouth" },
  ],
},
{
  id: "talkingToYouth",
  isDialogue: true,
  typewriter: {
    text: `<p>If you're lucky, a cash job might come up.</p><br/><p>Or, you could go see work and income?</p><br/><p>You might be able to get the youth payment</p>`,
    style: `text-[64px] ml-48`
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
    text: `<p>What is your decision?</p`, style: `text-[64px] items-center`
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
    text: `The Police show up`,
    style: `text-[64px] items-center justify-center`
  },
  choices: [{ text: "Next", nextScenario: "takenBackHome" }],
},
{
  id: "takenBackHome",
  progressObject: {
    count: 6
  },
  text: [<p>Your mum filed a Missing Person's Report.</p>,
    <p>The police decide to take you back home.</p>,
    <p>You ask them not to do this, but you aren't able to think of anyone else who can help. They say they will "have a talk" with your parents.</p>
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
  text: [<p>When you arrive in the police car, your mum runs out to you, but your stepdad tells the police that you are not welcome to live there and gets angry with your mum for filing the report.</p>,
    <p>The police try to reason with him, but he stands his ground.</p>,
    <p>The police call a youth housing service and ask them to put you up for the night with an assessment booked for the following day.</p>
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
  text: [<p>Work and Income refer you to a youth service who helps you get some accommodation and the two forms of ID, so you can get the Youth Payment.</p>,
    <p>Next, they also work through details of your living costs and prepare a budget, so you will be eligible for the payment</p>,
    <p>The money is mostly used up in rent and expenses, but you are left with a little over for food.</p>
  ],
  choices: [{ text: "Next", nextScenario: "goToMSD_Pt2" }],
},
{
  id: "goToMSD_Pt2",
  text: [<p>They explain this payment is only available, if you are studying, or training towards a job.</p>,
    <p>Your dream to be a doctor is too expensive for you right now.</p>,
    <p>Work and Income find you the opportunity to do an apprenticeship and this will pay you and train you at the same time.</p>
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
    text: `You decide to take it. You will be Okay.`, style: `text-[64px] items-center mt-32 flex-col`
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
    text: `A man suddenly approaches you`,
    style: `text-center mt-48 text-[64px]`
  },      
  choices: [{ text: "Next", nextScenario: "mansOffer" }],
},
{
  id: "mansOffer",
  isDialogue: true,
  typewriter: {
    text: `<p class='ml-36 mt-24'>You looking for a place to stay?</p> <br /><p class='ml-16'>You can stay at mine</p> <br/><p class='ml-72'>If you are nice to me</p>`,
    style: `text-[64px]`
  },      
  choices: [{ text: "Next", nextScenario: "refuseMansOffer" }],
},
{
  id: "refuseMansOffer",
  mood: {
    image: shocked,
    delay: 1500
  },
  text: [<p>You aren't willing to go with him.</p>,
    <p>Your new friends explain that you may have to steal to survive and give you some tips.</p>,
    <p>You steal some food from a dairy a few times, but on the fourth time they are waiting for you and haul you in.</p>
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
    text: `<p>I'm sick of you kids stealing from me</p><br/><p class='ml-80'>I'll teach you a lesson.</p>`,
    style: `mt-32 text-[64px]`,
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
    text: `<p>She calls the police. What do they say?</p>`,
    style: `text-[64px] text-center`,
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
    text: `<p>The police are sympathetic and convince <br />the dairy owner to drop charges</p>`,
    style: `mt-32 text-[64px] text-center`,
  },
  choices: [{ text: "Next", nextScenario: "policeSympathetic" }],
},
{
  id: "policeSympathetic",
  isEndingIntroNext: true,
  text: [<p>The police ask if you're okay and listen to your situation.</p>,
  <p>Then they take you to Auckland City Mission.</p>],
  choices: [{ text: "Next", nextScenario: "turnedEighteenEnding" }],
},
{
  id: "chargesNotDropped",
  typewriter: {
    text: `<p>The police are sympathetic, <br />but the dairy owner is not</p>`,
    style: `mt-48 text-[64px] text-center`,
  },
  choices: [{ text: "Next", nextScenario: "dairyOwnerUnsympathetic" }],
},
{
  id: "dairyOwnerUnsympathetic",
  mood: {
    image: calm,
    delay: 1000
  },
  text: [<p>The police ask if you're okay and listen to your situation.</p>,
    <p>Although the police try to convince the dairy owner to drop charges, she insists and says she is sick of shoplifters.</p>,
  <p>The Police involve their Youth Aid services, who support you into accommodation and work with you to plan your next steps.</p>],
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
  text: [<p>You think she won't stick up for you with your mum's partner and worry he'll show up at the house and shout at you - and maybe do worse things than just shout.</p>,
    <p>The church administrator asks whether she should call your parents, because "perhaps this was all just a big misunderstanding." She suggests the Pastor could get involved.</p>,
    <p>You start crying and tell her what's been happening in your house. She calls a member of the church who is a social worker.</p>
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
  text: [<p>The Social Worker lays out a few options if you don't want to stay with your aunty, but says it will take a few days to sort out.</p>,
    <p>He says he may struggle to find a place you can go for tonight.</p>
  ],
  choices: [
    { text: "Next", nextScenario: "socialWorkerSpeaking" },
  ],
},
{
  id: "socialWorkerSpeaking",
  isDialogue: true,
  typewriter: {
    text: `<p>Why don't you go with your aunty for a couple of days?</p><br/><p>I'll look into some options</p><br/><p>And we can meet up again in a couple of days<br/>to go through them?</p>`,
    style: `text-[64px]`
  },
  choices: [
    { text: "Next", nextScenario: "goWithAuntyDecision" },
  ],
},
{
  id: "goWithAuntyDecision",
  typewriter: {
    text: `<p>Should you stay with Aunty?</p>`,
    style: `text-[64px] items-center`
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
  text: [<p>Your aunt and uncle have a spare room and for a few days you manage to keep to your own room.</p>,
    <p>You all pretend nothing has happened, but then your cousin asks your uncle why you are crying all the time.</p>,
    <p>Your aunt keeps asking you if you have a job yet.</p>
  ],
  choices: [
    { text: "Next", nextScenario: "auntyTalking" },
  ],
},
{
  id: "auntyTalking",
  isDialogue: true,
  typewriter: {
    text: `<p>You're so expensive to feed</p><br/><p>You know, when I was 14, <br/>I started working at a supermarket</p><br/><p>Kids these days don't know hard work</p>`, 
    style: `text-[64px] mt-16 ml-32`
  },
  choices: [
    { text: "Next", nextScenario: "unwelcomeAndStressed" },
  ],
},
{
  id: "unwelcomeAndStressed",
  typewriter: {
    text: `<p>You are starting to feel unwelcome and stressed</p>`, 
    style: `text-[64px] justify-center text-center`
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
  text: [<p>You call the Social Worker and he picks you up and takes you back to the church office.</p>,
    <p>He makes calls on your behalf and finds you a place to stay.</p>,
    <p>You are very close to 18 years old, so he calls Lifewise for help.</p>
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
    text: '<p>Your friend asks their parents<br/> if you can stay with them for a while.</p>',
    style: `text-[64px] mt-32 text-center`
  },
  choices: [
    { text: "Next", nextScenario: `closeFriendPt2` },
  ],
},
{
  id: "closeFriendPt2",
  isRandom: true,
  typewriter: { text: '<p>What are they going to say?</p>', style: `items-center mt-12 text-[64px]`},
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
  typewriter: { text: '<p>The parents will help you.</p>', style: `items-center mt-8 text-[64px]` },
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
  typewriter: 
    { text: `<p>The parents won't help.</p>`, style: `mt-8 items-center text-[64px]`},
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
  text: [<p>Your friend's parents are sympathetic.</p>,
  <p>However they don't feel comfortable "overriding your parents' authority" by letting you stay with them.</p>],
  
  choices: [
    { text: "Next", nextScenario: `canSchoolHelp` },
  ],
},
{
  id: "canSchoolHelp",
  isRandom: true,
  typewriter:
    {text: `Can your school help?`, style:`items-center mt-8 text-[64px]` },
  
  choices: [
    { text: "Flip", nextScenario: `schoolCanHelp` },
    { text: "Flip", nextScenario: `schoolCantHelp` },
  ],
},
{
  id: "schoolCanHelp",
  progressObject: { count: 5 },
  typewriter: { text: '<p>The school can help.</p>', style: `items-center mt-8 text-[64px]`},
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
  text: [<p>Your school counselor wants to ask your parents to come in to resolve the issue.</p>,
    <p>But you share some of the behaviours from your step dad and why you don't feel safe there.</p>,
  <p>She refers you to Lifewise youth housing service.</p>],
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
  typewriter: { text: `<p>The school won't help you.</p>`, style: `items-center mt-8 text-[64px]`},
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
  mood: {
    image: worried,
    speechBubble: gettingHungry
  },
    typewriter: 
    { text: '<p>Should you beg for money?</p>', style: `items-center text-[64px]` },
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
  mood: {
    image: sad
  },
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
  text: [<p>When you go into a fast food chain to buy food and go to the toilet and wash, they refuse you service and demand you leave.</p>,
    <p>They say you smell and make other customers feel uncomfortable.</p>
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
  text: [<p>You feel really scared at night and try to stay awake as much as possible</p>,
    <p>That means you sleep more during the day and people walk past you.</p>,
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
    style: `text-[100px] justify-center items-center`
  },      
  choices: [
    { text: "Next", nextScenario: `yellingAtStrangersPt2` },
  ],
},
{
  id: "yellingAtStrangersPt2",
  typewriter: {
    text: `<p>He says they only hire University graduates</p>`,
    style: `text-[64px] justify-center items-center`
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
    mood: {
      image: puzzled
    },
    progressObject: {
      count: 2
    },
    typewriter: { text: `<p>Thankfully you are over 16!</p><p class= 'mt-10'>You are able to contact organisations <br/>such as lifewise by yourself.</p>`, style: `mt-28 text-[100px] text-center` },
    choices: [
      { text: "Next", nextScenario: `couchSurfing` },
    ],
  },
  {
    id: "couchSurfing",
    mood: {
      image: thinking
    },
    text: [<p>You've asked your friend if you could couch surf at their place for one night while you prepare to contact Lifewise.</p>,
      <p>Neither you, nor they mention to the parents that you've been kicked out of your home.</p>
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
    text: [<p>You should start phoning Lifewise immediately the next morning, but you are having some kind of reaction to your parents' rejection and you feel unable to get out of bed.</p>,
      <p>You stay like that for a day and night before your friend's parents challenge you.</p>,
      <p>You can't even talk about it - it's like you've lost your words. Your friend ends up explaining your situation.</p>
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
    typewriter:
      {text: `What happens?`, style:`items-center mt-8 text-[64px]` },
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
    fontSize: `text-[100px]`,
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
      text: [<p>Your experiences of rejection from family leads to anxiety and depression.
        However, you receive counselling and this helps you process what has happened to you.</p>
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
  information: [
    {
      image: house,
      subtitle: 'A Safe Place',
      text: [<p>You've turned eighteen in the last month. The Mission finds you a place to stay that night and you feel safe. You stay in your room for a few days just to sleep and feel okay.</p>]
    },
    {
      image: presentation,
      subtitle: 'A Helpful Keyworker',
      text: [<p>A keyworker is assigned to your case and they listen a lot and patiently you work together on all the decisions and actions you can take. They take you to Home Ground to meet with a helpful MSD (Ministry of Social Development) liaison and you find out how you can study and what benefits you are eligible for.</p>]
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
  isEnding: true,
  information: [
    {
      image: learningCurve,
      subtitle: 'Learning Curve',
      text: [<p>You are going to be OK. You have learned the grim reality that family don't always accept you, as well as finding out that NZ has a problem with proper help for teenagers and children who are unsafe, or need to leave their homes.</p>]
    },
    {
      image: community,
      subtitle: 'Community',
      text: [<p>You make some good friends, who are also going through their own life struggles and they enable you to look forward and be hopeful for the future.</p>]
    },
    {
      image: work,
      subtitle: 'Work',
      text: [<p>Your dream to be a doctor takes a back seat for a few years, because you have to get a job to support yourself, but the future starts to look much brighter and you are able to laugh again.</p>]
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
      text: [<p>You turn 18 in a youth hostel with other rangatahi quite far away from your school, friends and family.</p>]
    },
    {
      image: presentation,
      subtitle: 'Keyworker',
      text: [<p>You are referred to the Auckland City Mission who assign you a keyworker and finds you a permanent place to live. Together you work through your next steps, including study options.</p>]
    },
    {
      image: relationWithMum,
      subtitle: 'Relationship with Mum',
      text: [<p>Meanwhile, your mum contacts you and says she is no longer with her partner. She wants a good relationship with you and you decide you will try this. Your future is looking brighter.</p>]
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
      text: [<p>The school's Social Worker tells you about the Youth Payment available from MSD to cover
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
