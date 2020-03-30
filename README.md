# CSS Magic

React Css Library based on [Animista](https://animista.net/). There might be a demo setup
[Demo Here](https://robertlbebber.github.io/CssMagic/)

### Installing

Install from npm with

```
npm i css-magic
```

## Deployment

Using the components is easy

```
import { Attention, Background, Basic, Entrances, Exits, Text } from "css-magic";

...
render(){
    return (<Attention.Vibrate.Vibrate1 />)
}
```

Alternatively,

```
import Blink1 from "css-magic/src/components/generated/Attention/Blink/Blink1";

...
render(){
    return (<Blink1 />)
}
```

## Props

```
className:PropTypes.string, // Arbitrary ClassName for css selectors
delay:PropTypes.number, // Second deplay before animation starts
duration:PropTypes.number, // Second for Animation duration
loop:PropTypes.oneOfType([PropTypes.string,PropTypes.number]), // Number of times animation repeates itself
    Infinity as a string for it to continue indefinitely
direction:PropTypes.oneOf(["normal","reverse"]), // The direction of the animation
easing:PropTypes.string // How the animation alters over time
```

## Versioning

Version 1.0.0 No expectations for updates (unless large demand to do so)

## Authors

- **Robert Bebber** - He's a cool dude

## Acknowledgments

- Thanks for the developers over at [Animista](https://animista.net/) otherwise none of this would be possible
