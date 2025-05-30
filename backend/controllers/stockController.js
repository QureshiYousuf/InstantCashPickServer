import Stock from "../models/stocksModel.js";

export const getStocks = async (req, res) => {
  console.log("getStocks Controller");

  try {
    const stocks = await Stock.find();
    // console.log(stocks);
    res.status(200).json(stocks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const stockSold = async (req, res) => {
  console.log("stockSold Controller");
  // console.log(req.body);
  const { soldByDetails, soldPrice, status } = req.body;
  const stockId = req.body.stockId;
  // console.log("stockId", stockId);
  try {
    // const stock = await Stock.findById(stockId);
    const stock = await Stock.findByIdAndUpdate(
      stockId,
      {
        soldByDetails,
        soldPrice,
        status,
      },
      {
        new: true,
      }
    );
    // console.log(stock);
    res.status(200).json(stock);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
