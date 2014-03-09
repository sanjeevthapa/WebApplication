﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Globalization;
using System.Web.Security;

namespace WebApplication.Models
{

    public class  CMSPageModel
    {
        [Required]
        [DataType(DataType.Html)]
        [Display(Name = "CMSPage")]
        public string CMSPage { get; set; }

    }

}
