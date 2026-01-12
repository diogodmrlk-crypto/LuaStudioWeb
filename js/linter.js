window.runLinter = function(code) {
  const warnings = [];
  
  if (code.includes("wait("))
    warnings.push({ message: "Use task.wait()" });
  
  return warnings;
};
