import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SafeAreaView from "../component/SafeAreaView/SafeAreaView";
import { calculateLoan } from "../utils/calculator";
import { useNavigation } from "@react-navigation/native";
import Header from "../component/Header";
import Slider from "../component/Slider";
import { SHADE1, WHITE } from "../utils/colors";

let debounce = null;

const LOAN_AMOUNT = "10000000";
const TENURE = "10";
const INTEREST = "9.5";

const HomeLoanScreen = () => {
  const navigation = useNavigation();

  const [loanAmount, setLoanAmount] = useState(LOAN_AMOUNT);
  const [interestRate, setInterestRate] = useState(INTEREST);
  const [loanTerm, setLoanTerm] = useState(TENURE);

  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [interestAmount, setInterestAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState("");

  const [monthlyList, setMonthlyList] = useState("");
  const [interestList, setInterestList] = useState("");
  const [balanceList, setBalanceList] = useState("");

  const handleCalculate = () => {
    const [monthly, interest, total, monthList, IntList, BalList] =
      calculateLoan(loanAmount, interestRate, loanTerm);

    setMonthlyPayment(monthly);
    setInterestAmount(interest);
    setTotalAmount(total);

    setMonthlyList(monthList);
    setInterestList(IntList);
    setBalanceList(BalList);
  };

  const getValues = (type, value) => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      switch (type) {
        case "Amount:":
          setLoanAmount(value);
          break;
        case "Tenure:":
          setLoanTerm(value);
          break;
        case "Interest rate:":
          setInterestRate(value);
          break;

        default:
          break;
      }
      handleCalculate();
    }, 100);
  };

  return (
    <SafeAreaView>
      <Header>Home Loan Calculator</Header>
      <View style={styles.contentContainer}>
        <View style={styles.inputContainer}>
          <Slider
            min={"1000000"}
            max={"20000000"}
            mid={LOAN_AMOUNT}
            title="Amount:"
            comma
            getValues={getValues}
          />
          <Slider
            min={"1"}
            max={"20"}
            mid={TENURE}
            title="Tenure:"
            getValues={getValues}
          />
          <Slider
            min={"5"}
            max={"20"}
            mid={INTEREST}
            title="Interest rate:"
            getValues={getValues}
          />
        </View>

        {monthlyPayment !== "" && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Monthly Payment:</Text>
            <Text style={styles.result}>{`₹${parseInt(monthlyPayment)}`}</Text>
          </View>
        )}
        <Text>View More</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 1,
  },
  inputContainer: {},
  inputTitle: {
    fontSize: 16,
    marginBottom: 8,
    color: SHADE1,
    fontWeight: "500",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    paddingHorizontal: 12,
    backgroundColor: "white",
  },
  button: {
    height: 40,
    backgroundColor: "#2196F3",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  resultContainer: {
    marginTop: 10,
  },
  resultLabel: {
    fontSize: 16,
    marginBottom: 8,
    marginTop: 12,
    color: WHITE,
  },
  result: {
    fontSize: 50,
    fontWeight: "bold",
    color: WHITE,
  },
});

export default HomeLoanScreen;
