var mobile = {
  Samsung: {
    Galaxy_Z: {
      Fold_4: {
        model: "Galaxy Z Fold 4",
        price: 574_999,
        color: ["Black", "White", "Gold"],
      },
      Fold_3: {
        model: "Galaxy Z Fold 3",
        price: 314_999,
        color: ["Black", "White", "Gold"],
      },
      Flip_4: {
        model: "Galaxy Z Flip 4",
        price: 332_999,
        color: ["Black", "Silver", "Gold"],
      },
      Flip_3: {
        model: "Galaxy Z Flip 3",
        price: 199_999,
        color: ["Black", "Silver", "Gold"],
      },
    },
    Galaxy_Ultra: {
      S20: {
        model: "Galaxy S20 Ultra",
        price: 122_499,
        color: ["Light Blue", "Silver", "Gold"],
      },

      S21: {
        model: "Galaxy S21 Ultra",
        price: 242_999,
        color: ["Light Blue", "Silver", "Gold"],
      },
      S22: {
        model: "Galaxy S22 Ultra",
        price: 232_999,
        color: ["White", "Silver", "Gold"],
      },
      S23: {
        model: "Galaxy S23 Ultra",
        price: 559_999,
        color: ["White", "Silver", "Gold"],
      },
    },
    Galaxy_Note: {
      Note_8: {
        model: "Galaxy Note 8",
        price: 70_197,
        color: ["Light Blue", "Silver", "Gold"],
      },
      Note_9: {
        model: "Galaxy Note 9",
        price: 81_897,
        color: ["Light Blue", "Silver", "Gold"],
      },
      Note_10: {
        model: "Galaxy Note 10 Lite",
        price: 93_597,
        color: ["Light Blue", "Silver", "Gold"],
      },
      Note_11: {
        model: "Galaxy Note 11 Plus",
        price: 201_216,
        color: ["Light Blue", "Silver", "Gold"],
      },
      Note_20: {
        model: "Galaxy Note 20",
        price: 131_037,
        color: ["Light Blue", "Gold"],
      },
    },
  },
  Huawei: {
    P_Series: {
      P_Smart: {
        model: "P Smart",
        price: "Price N/A",
        color: ["Silver", "Black"],
      },
      P_10: {
        model: "P10",
        price: "Price N/A",
        color: ["Black", "rgb(147, 240, 187)"],
      },
      P_20: {
        model: "P20 Pro",
        price: 99_999,
        color: ["Gray", "Silver"],
      },
      P_30: {
        model: "P30",
        price: 89_999,
        color: ["Gray", "Silver"],
      },
    },
    Y_Series: {
      Y_5: {
        model: "Y5p",
        price: 14_100,
        color: ["Silver"],
      },
      Y_6: {
        model: "Y6p",
        price: 20_899,
        color: ["Black"],
      },
      Y_7: {
        model: "Y7a",
        price: 35_999,
        color: ["Black", "White"],
      },
      Y_9: {
        model: "Y9 Prime 2019",
        price: 33_999,
        color: ["Black", "Silver"],
      },
      Y_9a: {
        model: "Y9a",
        price: 43_999,
        color: ["Black", "Silver"],
      },
      Y_9s: {
        model: "Y9s 2019",
        price: 40_999,
        color: ["White"],
      },
    },
  },
  Vivo: {
    X_Series: {
      X_80: {
        model: "X80",
        price: 169_999,
        color: ["skyblue", "whitesmoke"],
      },
      X_60: {
        model: "X60 Pro",
        price: 129_990,
        color: ["white", "black"],
      },
      X_70: {
        model: "X70 Pro",
        price: 139_990,
        color: ["white", "black"],
      },
    },
    V_Series: {
      V_23: {
        model: "V23",
        price: 99_999,
        color: ["skyblue", "silver"],
      },
      V_25: {
        model: "V25",
        price: 139_999,
        color: ["blue", "silver"],
      },
      V_27: {
        model: "Y27e",
        price: 119_999,
        color: ["white", "black"],
      },
    },
    Y_Series: {
      Y_22: {
        model: "Y22",
        price: 69_999,
        color: ["blue", "silver"],
      },
      Y_35: {
        model: "Y35",
        price: 79_999,
        color: ["blue", "silver"],
      },
      V_73: {
        model: "Y73",
        price: 89_999,
        color: ["white", "black", "silver", "skyblue"],
      },
    },
  },
  Oppo: {
    F_Series: {
      F_21: {
        model: "F21 Pro 5G",
        price: 104_999,
        color: ["black", "silver"],
      },
      F_17: {
        model: "F17 Pro",
        price: 44_999,
        color: ["blue", "white", "gold"],
      },
      F_19: {
        model: "F19 Pro",
        price: 49_999,
        color: ["white", "black", "skyblue"],
      },
    },
    A_Series: {
      A_96: {
        model: "A96",
        price: 77_999,
        color: ["white", "black"],
      },
      A_54: {
        model: "A54",
        price: 59_999,
        color: ["silver", "skyblue"],
      },
      A_57: {
        model: "A57 4 GB",
        price: 54_999,
        color: ["black", "silver", "blue"],
      },
    },
    Reno_Series: {
      Reno_6: {
        model: "Reno 6 Pro",
        price: 119_999,
        color: ["gold", "silver"],
      },
      Reno_5: {
        model: "Reno 5",
        price: 55_999,
        color: ["white", "black", "silver", "gold"],
      },
      Reno_10: {
        model: "Reno 10X Zoom",
        price: 130_999,
        color: ["lightpink", "black", "white"],
      },
    },
  },
  AppleiPhone: {
    Iphone_13: {
      Iphone: {
        model: "iPhone 13",
        price: 273_999,
        color: ["red", "pink", "white"],
      },
      Iphone_Pro: {
        model: "iPhone 13 Pro",
        price: 342_999,
        color: ["grey", "red", "pink", "white"],
      },
      Iphone_max: {
        model: "iPhone 13 Pro Max",
        price: 373_999,
        color: ["grey", "red", "pink", "white"],
      },
      Iphone_mini: {
        model: "iPhone 13 Mini",
        price: 223_399,
        color: ["grey", "red", "pink", "black"],
      },
    },
    Iphone_12: {
      Iphone: {
        model: "iPhone 12",
        price: 175_599,
        color: ["red", "pink", "white"],
      },
      Iphone_Pro: {
        model: "iPhone 12 Pro",
        price: 220_899,
        color: ["grey", "red", "pink", "white"],
      },
      Iphone_max: {
        model: "iPhone 12 Pro Max",
        price: 236_999,
        color: ["grey", "red", "white", "black"],
      },
      Iphone_mini: {
        model: "iPhone 12 Mini",
        price: 157_399,
        color: ["grey", "white", "black"],
      },
    },
    Iphone_11: {
      Iphone: {
        model: "iPhone 11",
        price: 144_899,
        color: ["red", "pink", "white"],
      },
      Iphone_Pro: {
        model: "iPhone 11 Pro",
        price: 207_799,
        color: ["grey", "red", "pink", "white"],
      },
      Iphone_max: {
        model: "iPhone 11 Pro Max",
        price: 226_599,
        color: ["grey", "red", "black"],
      },
      Iphone_mini: {
        model: "iPhone 11 Mini",
        price: 197_399,
        color: ["grey", "black"],
      },
    },
  },
};

// name in filter
var value = document.getElementById("value");
var text = value.childNodes[1].childNodes[0];

var No = 1;
for (var key in mobile) {
  // (value.childNodes[No]).addEventListener('click', samsung())
  value.childNodes[No].innerHTML = key;
  No += 2;
}

// filter
const list = document.querySelectorAll("#value li");
const col = document.querySelectorAll(".col");

list.forEach((li) => {
  li.onclick = function () {
    // active
    list.forEach((li) => {
      li.className = "";
      console.log(list);
    });
    li.className = "active";
    // filter
    const v = li.textContent;
    col.forEach((img) => {
      img.style.display = "none";
      if (img.getAttribute("data-filter") == v) {
        img.style.display = "block";
      }
    });
  };
});

// name in mobile frame
var heName = 13;
var sec = 1;
var mf = document.getElementById("mobile-frame");
var i = 0;
for (var key in mobile) {
  for (var key1 in mobile[key]) {
    for (var key2 in mobile[key][key1]) {
      for (var key3 in mobile[key][key1][key2]) {
        i++;
        if (i == 3) {
          var p1 = mf.childNodes[heName].childNodes[sec].childNodes[3];
          var p2 = mf.childNodes[heName].childNodes[sec].childNodes[5];
          var model = mobile[key][key1][key2].model;
          var p3 = mf.childNodes[heName].childNodes[sec].childNodes[7];
          var price = mobile[key][key1][key2].price;
          var color = mobile[key][key1][key2].color;
          for (var colValue in color) {
            mf.childNodes[heName].childNodes[
              sec
            ].childNodes[9].innerHTML += `<span style="background-color: ${color[colValue]};" class="dot"></span>`;
          }
          p1.innerHTML = key;
          p2.innerHTML = model;
          p3.innerHTML = `Rs. ${price}`;
          sec += 2;
          if (sec == 13) {
            sec = 1;
            heName += 4;
          }
          i = 0;
        }
      }
    }
  }
}
function range() {
  var rangeValue = document.getElementById("rangeValue").value;
  if (rangeValue !== "") {
    var mf = document.getElementById("mobile-frame");
    console.log(rangeValue);
    j = 0;
    var h = 13;
    var s = 1;
    try {
      for (var key in mobile) {
        for (var key1 in mobile[key]) {
          for (var key2 in mobile[key][key1]) {
            for (var key3 in mobile[key][key1][key2]) {
              j++;
              if (j == 3) {
                var exectValue =
                  mf.childNodes[h].childNodes[s].childNodes[7].textContent;
                var exectValueN = Number(exectValue.slice(3));
                // console.log(exectValueN)
                if (rangeValue >= exectValueN) {
                  console.log(`${exectValue} <= ${rangeValue}`);
                  // (mf.childNodes[h].childNodes[s]).style.display = "block"
                  mf.childNodes[h].childNodes[s].style.display = "block";
                } else {
                  mf.childNodes[h].childNodes[s].style.display = "none";
                  // (mf.childNodes[h].childNodes[s]).style.display = "none"
                }
                s += 2;
                if (s == 13) {
                  s = 1;
                  h += 4;
                }
                j = 0;
              }
            }
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    alert("What is your maximum range");
  }
}

// search
function search() {
  var searchValue = (document.getElementById("searchValue").value);
  searchValue = searchValue.replace(/\s+/g, ' ').trim()
  if (searchValue != "") {
    var mf = document.getElementById("mobile-frame");
    j = 0;
    var h = 13;
    var s = 1;
    try {
      for (var key in mobile) {
        for (var key1 in mobile[key]) {
          for (var key2 in mobile[key][key1]) {
            for (var key3 in mobile[key][key1][key2]) {
              j++;
              if (j == 3) {
                var exectValue = mf.childNodes[h].childNodes[s].childNodes[3].textContent;
                var exectValue1 = mf.childNodes[h].childNodes[s].childNodes[5].textContent;
                var exect = `${exectValue} ${exectValue1}`
                
                if ((searchValue.trim()).toLowerCase() == exect.toLowerCase()) {
                  // (mf.childNodes[h].childNodes[s]).style.display = "block"
                  console.log("hello")
                  mf.childNodes[h].childNodes[s].style.display = "block";
                } else if (searchValue.toLowerCase() == exectValue.toLowerCase()) {
                  // (mf.childNodes[h].childNodes[s]).style.display = "block"
                  mf.childNodes[h].childNodes[s].style.display = "block";
                } else if (searchValue.toLowerCase() == exectValue1.toLowerCase()) {
                  // (mf.childNodes[h].childNodes[s]).style.display = "block"
                  mf.childNodes[h].childNodes[s].style.display = "block";
                } else {
                  mf.childNodes[h].childNodes[s].style.display = "none";
                  // (mf.childNodes[h].childNodes[s]).style.display = "none"
                }
                s += 2;
                if (s == 13) {
                  s = 1;
                  h += 4;
                }
                j = 0;
              }
            }
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
  else{
    alert("Sorry! we haven't this brand")
  }
}

// for mobile devices
const menuBtn = document.querySelector(".menu-btn");
const navlinks = document.querySelector(".option");
menuBtn.addEventListener("click", () => {
  navlinks.classList.toggle("mobile-menu");
});