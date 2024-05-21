const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const db = process.env.DATABASE;
try {
  mongoose.connect(
    "mongodb+srv://Green-Project:ElyesBali@cluster0.mlsbxoc.mongodb.net/greentech?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("Connection Successfull");
    }
  );
} catch (error) {
  console.log(error);
}
