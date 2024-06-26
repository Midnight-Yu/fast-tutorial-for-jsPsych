let jsPsych = initJsPsych();

let instruction = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <p>在实验中，屏幕中央会呈现一个圆形</p>
    <p>如果呈现的是蓝色圆形，请尽快按 F 键</p>
    <p>如果呈现的是橙色圆形，请尽快按 J 键</p>
    <p>按任意键开始实验</p>
    `,
    post_trial_gap: 500
}

// Timeline Variables Demo
let timeline_demo = {
    type: jsPsychHtmlKeyboardResponse,
    post_trial_gap: 500,
    timeline: [
        {
            stimulus: `+`,
            choices: ["NO_KEYS"],
            trial_duration: 500,
        },
        {
            stimulus: jsPsych.timelineVariable('picture'),
            choices: ['f','j']
        }
    ],
    timeline_variables: [
        {picture: '<img src="./images/blue.png">'},
        {picture: '<img src="./images/orange.png">'},
    ],
    sample: {
        type: 'fixed-repetitions',
        size: 30
    }
}

jsPsych.run([
    instruction,
    timeline_demo
])