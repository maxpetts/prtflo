import React, { CSSProperties } from "react";

// Not sure why I mix functional and class but 🤷‍♀️, deal with it :)

const AutoscrollingNouns = (props) => {
  const { nouns, ...rest } = props;

  let half = Math.ceil(nouns.length / 2);
  const top = nouns.splice(0, half);
  const bottom = nouns.splice(-half);

  // The above math shouldn't fail, but if it does for some reason: display the missed nouns
  nouns.length ? console.log("missed nouns : " + nouns) : "";

  const keyframes = `@keyframes nounSlide {
    from {
      transform: translateX(0);
    }
  
    to {
      transform: translateX(-100%);
    }
  }`;

  return (
    <>
      <style>{keyframes}</style>

      <AnimatedMappedNouns nounsToMap={top} />
      <AnimatedMappedNouns nounsToMap={bottom} bottom />
    </>
  );
};

class AnimatedMappedNouns extends React.Component<{
  nounsToMap: string[];
  bottom?: boolean;
}> {
  containerStyle: CSSProperties = {
    height: "50%",
    width: "fit-content",
    minHeight: "2.5rem",
    whiteSpace: "nowrap",
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: `${this.props.bottom ? "flex-start" : "flex-end"}`,
    position: "absolute",
    // I don't like this syntax; make it better future Max
    bottom: `${this.props.bottom ? 0 : ""}`,
    top: `${this.props.bottom ? "" : 0}`,
  };

  wordsContainerStyle: CSSProperties = {
    width: "50%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    animation: "nounSlide 17s linear infinite",
  };

  words: CSSProperties = {
    margin: "0 1.3rem",
  };

  render() {
    return (
      <div className="nounContainer" style={this.containerStyle}>
        <div style={this.wordsContainerStyle}>
          {this.props.nounsToMap.map((noun, index) => {
            return (
              <span key={index} style={this.words}>
                {noun}
              </span>
            );
          })}
        </div>
        <div style={this.wordsContainerStyle}>
          {this.props.nounsToMap.map((noun, index) => {
            return (
              <span key={index} style={this.words}>
                {noun}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AutoscrollingNouns;
