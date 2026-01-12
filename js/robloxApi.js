// ROBLOX + LUA AUTOCOMPLETE API
// Usado pelo Monaco Editor

window.robloxAPI = [
  
  /* =========================
     LUA BASE
  ========================= */
  "print", "warn", "error",
  "assert", "pcall", "xpcall",
  "pairs", "ipairs", "next",
  "type", "typeof",
  "tonumber", "tostring",
  "select", "unpack",
  "require",
  
  /* =========================
     MATH
  ========================= */
  "math.abs", "math.acos", "math.asin", "math.atan",
  "math.ceil", "math.clamp", "math.cos",
  "math.deg", "math.exp", "math.floor",
  "math.fmod", "math.huge", "math.log",
  "math.max", "math.min", "math.modf",
  "math.pi", "math.rad", "math.random", "math.randomseed",
  "math.round", "math.sign", "math.sin",
  "math.sqrt", "math.tan",
  
  /* =========================
     STRING
  ========================= */
  "string.byte", "string.char", "string.find",
  "string.format", "string.gmatch",
  "string.gsub", "string.len",
  "string.lower", "string.match",
  "string.rep", "string.reverse",
  "string.split", "string.sub",
  "string.upper",
  
  /* =========================
     TABLE
  ========================= */
  "table.clear", "table.clone",
  "table.concat", "table.create",
  "table.find", "table.freeze",
  "table.insert", "table.move",
  "table.pack", "table.remove",
  "table.sort", "table.unpack",
  
  /* =========================
     TASK / COROUTINE
  ========================= */
  "task.wait", "task.spawn", "task.delay",
  "coroutine.create", "coroutine.resume",
  "coroutine.running", "coroutine.status",
  "coroutine.wrap", "coroutine.yield",
  
  /* =========================
     ROBLOX CORE
  ========================= */
  "game", "workspace", "settings",
  "Instance.new", "Enum",
  
  /* =========================
     DATA TYPES
  ========================= */
  "Vector2.new", "Vector3.new",
  "CFrame.new", "CFrame.Angles",
  "UDim.new", "UDim2.new",
  "Color3.new", "Color3.fromRGB",
  "Rect.new", "Region3.new",
  "NumberRange.new", "NumberSequence.new",
  "ColorSequence.new",
  
  /* =========================
     SERVICES
  ========================= */
  "game:GetService(\"Players\")",
  "game:GetService(\"RunService\")",
  "game:GetService(\"TweenService\")",
  "game:GetService(\"UserInputService\")",
  "game:GetService(\"ReplicatedStorage\")",
  "game:GetService(\"ServerStorage\")",
  "game:GetService(\"Lighting\")",
  "game:GetService(\"SoundService\")",
  "game:GetService(\"MarketplaceService\")",
  "game:GetService(\"HttpService\")",
  "game:GetService(\"TeleportService\")",
  "game:GetService(\"PathfindingService\")",
  
  /* =========================
     PLAYERS / CHARACTER
  ========================= */
  "Players.LocalPlayer",
  "Players:GetPlayers",
  "Players.PlayerAdded",
  
  "Humanoid",
  "HumanoidRootPart",
  "Animator",
  
  /* =========================
     GUI OBJECTS
  ========================= */
  "ScreenGui",
  "Frame",
  "TextLabel",
  "TextButton",
  "TextBox",
  "ImageLabel",
  "ImageButton",
  "ScrollingFrame",
  "UIListLayout",
  "UIGridLayout",
  "UIPadding",
  "UICorner",
  "UIStroke",
  "UIScale",
  
  /* =========================
     INPUT / EVENTS
  ========================= */
  "UserInputService.InputBegan",
  "UserInputService.InputEnded",
  "UserInputService.InputChanged",
  
  /* =========================
     RUN SERVICE
  ========================= */
  "RunService.RenderStepped",
  "RunService.Heartbeat",
  "RunService.Stepped",
  
  /* =========================
     TWEEN
  ========================= */
  "TweenService:Create",
  
  /* =========================
     COMMON METHODS
  ========================= */
  "FindFirstChild",
  "WaitForChild",
  "GetChildren",
  "GetDescendants",
  "Destroy",
  "Clone",
  "IsA",
  
  /* =========================
     DEBUG / EXPLOIT CONTEXT
  ========================= */
  "getgenv", "setclipboard",
  "hookfunction", "hookmetamethod",
  "getrawmetatable", "setreadonly",
  "getnamecallmethod"
];
