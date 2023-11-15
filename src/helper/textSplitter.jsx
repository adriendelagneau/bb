const textSplitter = (text) => {
    const splitText = text.split('');
  
    return splitText.map((letter, index) => (
      <span key={index}>{letter}</span>
    ));
};
  
export default textSplitter