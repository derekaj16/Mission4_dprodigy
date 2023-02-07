using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4_dprodigy.Models
{
    public class CalculatorModel
    {
        [Range(0,100)]
        public double Assignment { get; set; }
        [Range(0, 100)]
        public double Project { get; set; }
        [Range(0, 100)]
        public double Quiz { get; set; }
        [Range(0, 100)]
        public double Midterm { get; set; }
        [Range(0, 100)]
        public double Intex { get; set; }
        [Range(0, 100)]
        public double Final { get; set; }


    }
}
