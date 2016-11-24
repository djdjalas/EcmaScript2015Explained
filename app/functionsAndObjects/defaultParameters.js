import { log, logTitle } from '../WindowLogger';

export default function(){
  logTitle('Default Parameters');

  const calculatePay = (yearSalary, bonus = {
    employeeBonus: 0,
    teamBonus: 0
  }) => {
    return yearSalary + bonus.employeeBonus + bonus.teamBonus;
  }

  const employeeSalary = calculatePay(34000, {
    employeeBonus : 2000,
    teamBonus: 850
  });
  log(employeeSalary);

}
