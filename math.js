import react from "react";

const pi = 3.14;

function DoublePi(){
  return pi * 2
}

function TriplePi(){
  return pi * 3
}

function add(n1, n2) {
  return n1 + n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

export default pi;
export {DoublePi, TriplePi, add, multiply, subtract, divide};
