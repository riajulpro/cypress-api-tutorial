const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.json());
const PORT = 3000;

const dataFilePath = path.join(__dirname, "data.json");

// Helper function to read data from JSON file
const readData = () => {
  try {
    const data = fs.readFileSync(dataFilePath);
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Helper function to write data to JSON file
const writeData = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running fine",
    data: [],
  });
});

// CRUD operations

// Create
app.post("/data", (req, res) => {
  const data = readData();
  const newData = { id: Date.now(), ...req.body };

  data.push(newData);
  writeData(data);

  res.status(201).json({
    success: true,
    message: "Item created",
    data: newData,
  });
});

// Read all
app.get("/data", (req, res) => {
  const data = readData();
  res.status(200).json({
    success: true,
    message: "Items retrieved successfully",
    data: data,
  });
});

// Read one by ID
app.get("/data/:id", (req, res) => {
  const data = readData();
  const item = data.find((d) => d.id === parseInt(req.params.id));
  if (item) {
    res.status(200).json({
      success: true,
      message: "Item retrieved successfully",
      data: item,
    });
  } else {
    res.status(404).json({
      success: false,
      message: "Item not found",
    });
  }
});

// Update
app.put("/data/:id", (req, res) => {
  const data = readData();

  const index = data.findIndex((d) => d.id === parseInt(req.params.id));

  if (index !== -1) {
    data[index] = { ...data[index], ...req.body };
    writeData(data);
    res.status(200).json({
      success: true,
      message: "Item updated",
      data: data[index],
    });
  } else {
    res.status(404).json({
      success: false,
      message: "Item not found",
    });
  }
});

// Delete
app.delete("/data/:id", (req, res) => {
  let data = readData();
  const index = data.findIndex((d) => d.id === parseInt(req.params.id));
  if (index !== -1) {
    data = data.filter((d) => d.id !== parseInt(req.params.id));
    writeData(data);
    res.status(200).json({
      success: true,
      message: "Item deleted successfully",
    });
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
