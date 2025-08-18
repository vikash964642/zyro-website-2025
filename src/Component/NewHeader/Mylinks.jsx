export const links = [
    
    { name: 'Product', submenu: true, sublinks: [

        { name: 'Zyro Soundbox', link: "/soundboxPage", img: "zyroSoundboxIcon"},
        { name: 'Zyro POS', link: "/posPage", img: "zyroPosIcon"  },
        // { name: 'Gift Card API', link: "", img: "giftCardApi"  },
        // { name: 'UPI Stack', link: "", img: "upiStackIcon"  },
    ],
    sublinks2: [

        { name: 'Expense Management', link: "/ExpenseManagement", img: "expenseManagementIcon" },
        // { name: 'Billing & Accounting', link: "", img: "billingAccountingIcon"  },
        { name: 'Prepaid Card', link: "/prepaidPage", img: "prepaidCard"  }, 
    ],
 },

    { name: 'Banking', submenu: true, sublinks: [
        { name: 'Connected Banking', link: "/connectedbanking", img: "ConnectedBankingIcon"  },
        { name: 'Payout', link: "/payout", img: "PayoutIcon"  },
        // { name: 'Escrow Account', link: "/", img: "EscrowAccountIcon"  },
      
    ],
       sublinks2: [

        // { name: 'Bank Account Verification', link: "", img: "BankAccountVarificationIcon" },
        // { name: 'Zyro Capital', link: "", img: "ZyrocapitalIcon"  },
    ],
 }
 ,
    { name: 'Resources', submenu: true, sublinks: [
        { name: 'Terms & Conditions', link: "/terms-and-conditions", img: ""  },
        { name: 'Privacy Policy', link: "/privacy-policy", img: ""  },
        // { name: 'Cookies Policy', link: "", img: ""  }
    ],
 },
     { name: 'Company', submenu: true, sublinks: [
        { name: 'Home', link: "/", img: ""  },
        { name: 'About Us', link: "/About-us", img: ""  },
        { name: 'Blog', link: "https://zyro.in/blog/", img: ""  },
        { name: 'Contact Us', link: "/ContactUs", img: ""  },
        // { name: 'Careers', link: "/", img: ""  },
        // { name: 'Help Desk', link: "/", img: ""  }
    ],
 }
];