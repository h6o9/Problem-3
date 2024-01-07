async function innerFunction() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject (new Error ("Inner function successfully completed"));
      }, 1000);
    });
  }
  
  async function outerFunction() {
    try {
      await innerFunction();
      console.log("Inner function successfully completed:");
    } catch (error) {
      console.error("Error in outer function:", error.message);
    }
  }
  
  outerFunction();
  