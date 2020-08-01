import { useState, useEffect } from "react";

const Navigate = (raw) => {
  const [contents, setContent] = useState([]);

  useEffect(() => {
    setContent(raw);
  }, []);

  const handleNavigation = (navigationType) => {
    const contentsLength = contents.length;
    const newContentsArray = [];

    if (navigationType === "right") {
      contents.forEach((content, index) => {
        if (index !== contentsLength - 1) {
          newContentsArray.push(content);
        }

        if (index === contentsLength - 1) {
          newContentsArray.unshift(content);
        }
      });
    }

    if (navigationType === "left") {
      contents.forEach((content, index) => {
        if (index !== 0) {
          newContentsArray.push(content);
        }

        if (index === contentsLength - 1) {
          newContentsArray.push(contents[0]);
        }
      });
    }

    setContent(newContentsArray);
  };

  return { contents, handleNavigation };
};

export default Navigate;
