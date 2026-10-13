# Building AI with Makecode Arcade



- [Introduction](#intro)
- [How to run this Project?](#how-to-run-this-project)
- [Explanation](#explanation)
- [Tech Used 💻](#tech-used-)


### Intro

Welcome to my AI Image Generation model built entirely on the PXT Framework.
This project includes:

- 🧠 **A 60 parameter** network of 4x3 independently trained neurons
- 📈 Next pixel prediction for **training the model**
- 💾 Three built in datasets, **totaling up to 150 samples** for training the AI
  
If you're wondering, [main.ts](https://akishyan-premaharan.github.io/procedural-image-engine/blob/master/main.ts) is the project source code.

## How to run this Project?

You can:

- Play my project [**here at Github.io**](https://akishyan-premaharan.github.io/procedural-image-engine/)

- Add it as a MakeCode Arcade Extension
  - Open [**MakeCode Arcade**](https://arcade.makecode.com/)
  - Click on New Project
  - Click on Extensions under the gear menu
  - Search for **https://github.com/akishyan-premaharan/procedural-image-engine** and import

- Edit my project at [**MakeCode Arcade**](https://arcade.makecode.com/), where you
   - Click on Import then click on Import URL
   - Paste **https://github.com/akishyan-premaharan/procedural-image-engine** and click import

## Explanation

### Diagram of a single Neuron

``` mermaid
graph LR
    %% Inputs to Summation
    I1[Input ] -->|Weight | Sum[Sum of each input times each weight]
    I2[Input ] -->|Weight | Sum
    I3[Input ] -->|Weight | Sum
    
    %% Processing and Output
    Sum --> B[Added Bias]
    B --> Output[Output]

```
### Diagram of the AI Model
  
```mermaid
graph LR
    %% AI Model to Categories
    A1[AI Model] --> MB[Model training on Beach images]
    A1 --> MSF[Model training on Smiley Face images]
    A1 --> MSB[Model training on Soccer Ball images]

    %% Neurons
    MB --> N11[Neuron]
    MB --> N12[Neuron]
    MB --> N13[Neuron]
    MB --> N14[Neuron]

    MSB --> N21[Neuron]
    MSB --> N22[Neuron]
    MSB --> N23[Neuron]
    MSB --> N24[Neuron]

    MSF --> N31[Neuron]
    MSF --> N32[Neuron]
    MSF --> N33[Neuron]
    MSF --> N34[Neuron]
   
```

## Tech Used 💻

|Name|Usage|
|----|-----|
|![MakeCode Arcade TypeScript](https://img.shields.io/badge/makecode%20arcade%20typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)|The language used to code the AI|
|![MakeCode Arcade](https://img.shields.io/badge/MakeCode%20Arcade-%23470CA6.svg?style=for-the-badge&logo=typescript&logoColor=white)|The **IDE**|
|![PXT](https://img.shields.io/badge/PXT%20Framework-%23470CA6.svg?style=for-the-badge&logo=typescript&logoColor=white)|The IDE **Framework** that along with Github, helped automatically create this repo|
|![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)|**Automatically created** this repo with PXT|


