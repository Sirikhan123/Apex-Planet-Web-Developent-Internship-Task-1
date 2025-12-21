  function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();
    if (task === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task;
    span.classList.add("task-text");

    const btn = document.createElement("button");
    btn.textContent = "Remove";
    btn.onclick = () => {
      // Animate strike-through
      span.classList.add("completed");
      // Wait for animation to finish before removing
      setTimeout(() => {
        li.remove();
      }, 600); // Matches CSS transition duration
    };

    li.appendChild(span);
    li.appendChild(btn);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }