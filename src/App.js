import "./App.css";
import { Products, Navbar, Cart, Checkout } from "./Components";
import { useState } from "react";
import { commerce } from "./lib/commerce";
import { useEffect } from "react";
import Product from "./Components/Product/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";

// export const abc = {
//   "data": [{
//           "id": "prod_bWZ3l8xNmBlkpE",
//           "created": 1655836047,
//           "updated": 1655836522,
//           "active": true,
//           "permalink": "gY7BFp",
//           "name": "key",
//           "description": "<p>Key and lock for door safety </p>",
//           "price": {
//               "raw": 65,
//               "formatted": "65.00",
//               "formatted_with_symbol": "$65.00",
//               "formatted_with_code": "65.00 USD"
//           },
//           "inventory": {
//               "managed": false,
//               "available": 0
//           },
//           "sku": null,
//           "sort_order": 0,
//           "seo": {
//               "title": null,
//               "description": null
//           },
//           "thank_you_url": null,
//           "meta": null,
//           "conditionals": {
//               "is_active": true,
//               "is_tax_exempt": false,
//               "is_pay_what_you_want": false,
//               "is_inventory_managed": false,
//               "is_sold_out": false,
//               "has_digital_delivery": false,
//               "has_physical_delivery": false,
//               "has_images": false,
//               "collects_fullname": false,
//               "collects_shipping_address": false,
//               "collects_billing_address": false,
//               "collects_extra_fields": false
//           },
//           "is": {
//               "active": true,
//               "tax_exempt": false,
//               "pay_what_you_want": false,
//               "inventory_managed": false,
//               "sold_out": false
//           },
//           "has": {
//               "digital_delivery": false,
//               "physical_delivery": false,
//               "images": false
//           },
//           "collects": {
//               "fullname": false,
//               "shipping_address": false,
//               "billing_address": false,
//               "extra_fields": false
//           },
//           "checkout_url": {
//               "checkout": "https://checkout.chec.io/gY7BFp?checkout=true",
//               "display": "https://checkout.chec.io/gY7BFp"
//           },
//           "extra_fields": [],
//           "variant_groups": [],
//           "categories": [{
//               "id": "cat_VKXmwDmnQorgDA",
//               "slug": "safety",
//               "name": "safety"
//           }],
//           "assets": [],
//           "image": null,
//           "related_products": [],
//           "attributes": []
//       },
//       {
//           "id": "prod_QG375v3vLrlrMO",
//           "created": 1655836090,
//           "updated": 1655836960,
//           "active": true,
//           "permalink": "YYsjtZ",
//           "name": "box",
//           "description": "<p>carboard box safety</p><p></p>",
//           "price": {
//               "raw": 65,
//               "formatted": "65.00",
//               "formatted_with_symbol": "$65.00",
//               "formatted_with_code": "65.00 USD"
//           },
//           "inventory": {
//               "managed": false,
//               "available": 0
//           },
//           "sku": null,
//           "sort_order": 0,
//           "seo": {
//               "title": null,
//               "description": null
//           },
//           "thank_you_url": null,
//           "meta": null,
//           "conditionals": {
//               "is_active": true,
//               "is_tax_exempt": false,
//               "is_pay_what_you_want": false,
//               "is_inventory_managed": false,
//               "is_sold_out": false,
//               "has_digital_delivery": false,
//               "has_physical_delivery": false,
//               "has_images": false,
//               "collects_fullname": false,
//               "collects_shipping_address": false,
//               "collects_billing_address": false,
//               "collects_extra_fields": false
//           },
//           "is": {
//               "active": true,
//               "tax_exempt": false,
//               "pay_what_you_want": false,
//               "inventory_managed": false,
//               "sold_out": false
//           },
//           "has": {
//               "digital_delivery": false,
//               "physical_delivery": false,
//               "images": false
//           },
//           "collects": {
//               "fullname": false,
//               "shipping_address": false,
//               "billing_address": false,
//               "extra_fields": false
//           },
//           "checkout_url": {
//               "checkout": "https://checkout.chec.io/YYsjtZ?checkout=true",
//               "display": "https://checkout.chec.io/YYsjtZ"
//           },
//           "extra_fields": [],
//           "variant_groups": [],
//           "categories": [{
//               "id": "cat_VKXmwDmnQorgDA",
//               "slug": "safety",
//               "name": "safety"
//           }],
//           "assets": [],
//           "image": null,
//           "related_products": [],
//           "attributes": []
//       },
//       {
//           "id": "prod_0egY5eK4abw3Qn",
//           "created": 1655836092,
//           "updated": 1655836373,
//           "active": true,
//           "permalink": "dvUuFq",
//           "name": "cable",
//           "description": "<p>electric cable</p>",
//           "price": {
//               "raw": 65,
//               "formatted": "65.00",
//               "formatted_with_symbol": "$65.00",
//               "formatted_with_code": "65.00 USD"
//           },
//           "inventory": {
//               "managed": false,
//               "available": 0
//           },
//           "sku": null,
//           "sort_order": 0,
//           "seo": {
//               "title": null,
//               "description": null
//           },
//           "thank_you_url": null,
//           "meta": null,
//           "conditionals": {
//               "is_active": true,
//               "is_tax_exempt": false,
//               "is_pay_what_you_want": false,
//               "is_inventory_managed": false,
//               "is_sold_out": false,
//               "has_digital_delivery": false,
//               "has_physical_delivery": false,
//               "has_images": false,
//               "collects_fullname": false,
//               "collects_shipping_address": false,
//               "collects_billing_address": false,
//               "collects_extra_fields": false
//           },
//           "is": {
//               "active": true,
//               "tax_exempt": false,
//               "pay_what_you_want": false,
//               "inventory_managed": false,
//               "sold_out": false
//           },
//           "has": {
//               "digital_delivery": false,
//               "physical_delivery": false,
//               "images": false
//           },
//           "collects": {
//               "fullname": false,
//               "shipping_address": false,
//               "billing_address": false,
//               "extra_fields": false
//           },
//           "checkout_url": {
//               "checkout": "https://checkout.chec.io/dvUuFq?checkout=true",
//               "display": "https://checkout.chec.io/dvUuFq"
//           },
//           "extra_fields": [],
//           "variant_groups": [],
//           "categories": [{
//               "id": "cat_QG375vVYL5rMOg",
//               "slug": "electric",
//               "name": "electric"
//           }],
//           "assets": [],
//           "image": null,
//           "related_products": [],
//           "attributes": []
//       },
//       {
//           "id": "prod_RqEv5xkx8eoZz4",
//           "created": 1655836098,
//           "updated": 1655836350,
//           "active": true,
//           "permalink": "CXlUqg",
//           "name": "mouse",
//           "description": "<p>computer mouse</p>",
//           "price": {
//               "raw": 65,
//               "formatted": "65.00",
//               "formatted_with_symbol": "$65.00",
//               "formatted_with_code": "65.00 USD"
//           },
//           "inventory": {
//               "managed": false,
//               "available": 0
//           },
//           "sku": null,
//           "sort_order": 0,
//           "seo": {
//               "title": null,
//               "description": null
//           },
//           "thank_you_url": null,
//           "meta": null,
//           "conditionals": {
//               "is_active": true,
//               "is_tax_exempt": false,
//               "is_pay_what_you_want": false,
//               "is_inventory_managed": false,
//               "is_sold_out": false,
//               "has_digital_delivery": false,
//               "has_physical_delivery": false,
//               "has_images": false,
//               "collects_fullname": false,
//               "collects_shipping_address": false,
//               "collects_billing_address": false,
//               "collects_extra_fields": false
//           },
//           "is": {
//               "active": true,
//               "tax_exempt": false,
//               "pay_what_you_want": false,
//               "inventory_managed": false,
//               "sold_out": false
//           },
//           "has": {
//               "digital_delivery": false,
//               "physical_delivery": false,
//               "images": false
//           },
//           "collects": {
//               "fullname": false,
//               "shipping_address": false,
//               "billing_address": false,
//               "extra_fields": false
//           },
//           "checkout_url": {
//               "checkout": "https://checkout.chec.io/CXlUqg?checkout=true",
//               "display": "https://checkout.chec.io/CXlUqg"
//           },
//           "extra_fields": [],
//           "variant_groups": [],
//           "categories": [{
//               "id": "cat_QG375vVYL5rMOg",
//               "slug": "electric",
//               "name": "electric"
//           }],
//           "assets": [],
//           "image": null,
//           "related_products": [],
//           "attributes": []
//       },
//       {
//           "id": "prod_8XxzoByNLNwPQA",
//           "created": 1655836099,
//           "updated": 1655836099,
//           "active": true,
//           "permalink": "oHGfWN",
//           "name": "keyboard",
//           "description": "<p>mechanical keyboard</p>",
//           "price": {
//               "raw": 65,
//               "formatted": "65.00",
//               "formatted_with_symbol": "$65.00",
//               "formatted_with_code": "65.00 USD"
//           },
//           "inventory": {
//               "managed": false,
//               "available": 0
//           },
//           "sku": null,
//           "sort_order": 0,
//           "seo": {
//               "title": null,
//               "description": null
//           },
//           "thank_you_url": null,
//           "meta": null,
//           "conditionals": {
//               "is_active": true,
//               "is_tax_exempt": false,
//               "is_pay_what_you_want": false,
//               "is_inventory_managed": false,
//               "is_sold_out": false,
//               "has_digital_delivery": false,
//               "has_physical_delivery": false,
//               "has_images": false,
//               "collects_fullname": false,
//               "collects_shipping_address": false,
//               "collects_billing_address": false,
//               "collects_extra_fields": false
//           },
//           "is": {
//               "active": true,
//               "tax_exempt": false,
//               "pay_what_you_want": false,
//               "inventory_managed": false,
//               "sold_out": false
//           },
//           "has": {
//               "digital_delivery": false,
//               "physical_delivery": false,
//               "images": false
//           },
//           "collects": {
//               "fullname": false,
//               "shipping_address": false,
//               "billing_address": false,
//               "extra_fields": false
//           },
//           "checkout_url": {
//               "checkout": "https://checkout.chec.io/oHGfWN?checkout=true",
//               "display": "https://checkout.chec.io/oHGfWN"
//           },
//           "extra_fields": [],
//           "variant_groups": [],
//           "categories": [{
//               "id": "cat_QG375vVYL5rMOg",
//               "slug": "electric",
//               "name": "electric"
//           }],
//           "assets": [],
//           "image": null,
//           "related_products": [],
//           "attributes": []
//       },
//       {
//           "id": "prod_4OANwRz4epwvYL",
//           "created": 1655836526,
//           "updated": 1655836939,
//           "active": true,
//           "permalink": "eiVZtD",
//           "name": "helmet",
//           "description": "<p>safety helmet for construction worker's</p>",
//           "price": {
//               "raw": 65,
//               "formatted": "65.00",
//               "formatted_with_symbol": "$65.00",
//               "formatted_with_code": "65.00 USD"
//           },
//           "inventory": {
//               "managed": false,
//               "available": 0
//           },
//           "sku": null,
//           "sort_order": 0,
//           "seo": {
//               "title": null,
//               "description": null
//           },
//           "thank_you_url": null,
//           "meta": null,
//           "conditionals": {
//               "is_active": true,
//               "is_tax_exempt": false,
//               "is_pay_what_you_want": false,
//               "is_inventory_managed": false,
//               "is_sold_out": false,
//               "has_digital_delivery": false,
//               "has_physical_delivery": false,
//               "has_images": false,
//               "collects_fullname": false,
//               "collects_shipping_address": false,
//               "collects_billing_address": false,
//               "collects_extra_fields": false
//           },
//           "is": {
//               "active": true,
//               "tax_exempt": false,
//               "pay_what_you_want": false,
//               "inventory_managed": false,
//               "sold_out": false
//           },
//           "has": {
//               "digital_delivery": false,
//               "physical_delivery": false,
//               "images": false
//           },
//           "collects": {
//               "fullname": false,
//               "shipping_address": false,
//               "billing_address": false,
//               "extra_fields": false
//           },
//           "checkout_url": {
//               "checkout": "https://checkout.chec.io/eiVZtD?checkout=true",
//               "display": "https://checkout.chec.io/eiVZtD"
//           },
//           "extra_fields": [],
//           "variant_groups": [],
//           "categories": [{
//               "id": "cat_VKXmwDmnQorgDA",
//               "slug": "safety",
//               "name": "safety"
//           }],
//           "assets": [],
//           "image": null,
//           "related_products": [],
//           "attributes": []
//       },
//       {
//           "id": "prod_yA6nldP4pMlEWb",
//           "created": 1655836528,
//           "updated": 1655836891,
//           "active": true,
//           "permalink": "ncJLHV",
//           "name": "head disk",
//           "description": "<p>hard disk drives (HDDs) in computers and perform the same basic functions as a hard drive.</p>",
//           "price": {
//               "raw": 65,
//               "formatted": "65.00",
//               "formatted_with_symbol": "$65.00",
//               "formatted_with_code": "65.00 USD"
//           },
//           "inventory": {
//               "managed": false,
//               "available": 0
//           },
//           "sku": null,
//           "sort_order": 0,
//           "seo": {
//               "title": null,
//               "description": null
//           },
//           "thank_you_url": null,
//           "meta": null,
//           "conditionals": {
//               "is_active": true,
//               "is_tax_exempt": false,
//               "is_pay_what_you_want": false,
//               "is_inventory_managed": false,
//               "is_sold_out": false,
//               "has_digital_delivery": false,
//               "has_physical_delivery": false,
//               "has_images": false,
//               "collects_fullname": false,
//               "collects_shipping_address": false,
//               "collects_billing_address": false,
//               "collects_extra_fields": false
//           },
//           "is": {
//               "active": true,
//               "tax_exempt": false,
//               "pay_what_you_want": false,
//               "inventory_managed": false,
//               "sold_out": false
//           },
//           "has": {
//               "digital_delivery": false,
//               "physical_delivery": false,
//               "images": false
//           },
//           "collects": {
//               "fullname": false,
//               "shipping_address": false,
//               "billing_address": false,
//               "extra_fields": false
//           },
//           "checkout_url": {
//               "checkout": "https://checkout.chec.io/ncJLHV?checkout=true",
//               "display": "https://checkout.chec.io/ncJLHV"
//           },
//           "extra_fields": [],
//           "variant_groups": [],
//           "categories": [{
//               "id": "cat_QG375vVYL5rMOg",
//               "slug": "electric",
//               "name": "electric"
//           }],
//           "assets": [],
//           "image": null,
//           "related_products": [],
//           "attributes": []
//       },
//       {
//           "id": "prod_VPvL5zWD9OlAQk",
//           "created": 1655836535,
//           "updated": 1655836868,
//           "active": true,
//           "permalink": "uey5wC",
//           "name": "ssd",
//           "description": "<p>solid state disk for external memory upto 2TB</p>",
//           "price": {
//               "raw": 65,
//               "formatted": "65.00",
//               "formatted_with_symbol": "$65.00",
//               "formatted_with_code": "65.00 USD"
//           },
//           "inventory": {
//               "managed": false,
//               "available": 0
//           },
//           "sku": null,
//           "sort_order": 0,
//           "seo": {
//               "title": null,
//               "description": null
//           },
//           "thank_you_url": null,
//           "meta": null,
//           "conditionals": {
//               "is_active": true,
//               "is_tax_exempt": false,
//               "is_pay_what_you_want": false,
//               "is_inventory_managed": false,
//               "is_sold_out": false,
//               "has_digital_delivery": false,
//               "has_physical_delivery": false,
//               "has_images": false,
//               "collects_fullname": false,
//               "collects_shipping_address": false,
//               "collects_billing_address": false,
//               "collects_extra_fields": false
//           },
//           "is": {
//               "active": true,
//               "tax_exempt": false,
//               "pay_what_you_want": false,
//               "inventory_managed": false,
//               "sold_out": false
//           },
//           "has": {
//               "digital_delivery": false,
//               "physical_delivery": false,
//               "images": false
//           },
//           "collects": {
//               "fullname": false,
//               "shipping_address": false,
//               "billing_address": false,
//               "extra_fields": false
//           },
//           "checkout_url": {
//               "checkout": "https://checkout.chec.io/uey5wC?checkout=true",
//               "display": "https://checkout.chec.io/uey5wC"
//           },
//           "extra_fields": [],
//           "variant_groups": [],
//           "categories": [{
//               "id": "cat_QG375vVYL5rMOg",
//               "slug": "electric",
//               "name": "electric"
//           }],
//           "assets": [],
//           "image": null,
//           "related_products": [],
//           "attributes": []
//       },
//       {
//           "id": "prod_nPEVlNa4qJ5a7d",
//           "created": 1655836538,
//           "updated": 1655839378,
//           "active": true,
//           "permalink": "NT4vKu",
//           "name": "headphone",
//           "description": "<p>music headphone</p>",
//           "price": {
//               "raw": 65,
//               "formatted": "65.00",
//               "formatted_with_symbol": "$65.00",
//               "formatted_with_code": "65.00 USD"
//           },
//           "inventory": {
//               "managed": false,
//               "available": 0
//           },
//           "sku": null,
//           "sort_order": 0,
//           "seo": {
//               "title": null,
//               "description": null
//           },
//           "thank_you_url": null,
//           "meta": null,
//           "conditionals": {
//               "is_active": true,
//               "is_tax_exempt": false,
//               "is_pay_what_you_want": false,
//               "is_inventory_managed": false,
//               "is_sold_out": false,
//               "has_digital_delivery": false,
//               "has_physical_delivery": false,
//               "has_images": true,
//               "collects_fullname": false,
//               "collects_shipping_address": false,
//               "collects_billing_address": false,
//               "collects_extra_fields": false
//           },
//           "is": {
//               "active": true,
//               "tax_exempt": false,
//               "pay_what_you_want": false,
//               "inventory_managed": false,
//               "sold_out": false
//           },
//           "has": {
//               "digital_delivery": false,
//               "physical_delivery": false,
//               "images": true
//           },
//           "collects": {
//               "fullname": false,
//               "shipping_address": false,
//               "billing_address": false,
//               "extra_fields": false
//           },
//           "checkout_url": {
//               "checkout": "https://checkout.chec.io/NT4vKu?checkout=true",
//               "display": "https://checkout.chec.io/NT4vKu"
//           },
//           "extra_fields": [],
//           "variant_groups": [],
//           "categories": [{
//               "id": "cat_QG375vVYL5rMOg",
//               "slug": "electric",
//               "name": "electric"
//           }],
//           "assets": [{
//               "id": "ast_bWZ3l8adJGwkpE",
//               "url": "https://cdn.chec.io/merchants/43597/assets/b0ydp5uok0BTMERl|pink-headphones-wireless-digital-device_53876-96804.jpeg",
//               "description": null,
//               "is_image": true,
//               "filename": "pink-headphones-wireless-digital-device_53876-96804.jpeg",
//               "file_size": 41160,
//               "file_extension": "jpeg",
//               "image_dimensions": {
//                   "width": 740,
//                   "height": 493
//               },
//               "meta": [],
//               "created_at": 1655839333,
//               "updated_at": 1655839336
//           }],
//           "image": {
//               "id": "ast_bWZ3l8adJGwkpE",
//               "url": "https://cdn.chec.io/merchants/43597/assets/b0ydp5uok0BTMERl|pink-headphones-wireless-digital-device_53876-96804.jpeg",
//               "description": null,
//               "is_image": true,
//               "filename": "pink-headphones-wireless-digital-device_53876-96804.jpeg",
//               "file_size": 41160,
//               "file_extension": "jpeg",
//               "image_dimensions": {
//                   "width": 740,
//                   "height": 493
//               },
//               "meta": [],
//               "created_at": 1655839333,
//               "updated_at": 1655839336
//           },
//           "related_products": [],
//           "attributes": []
//       },
//       {
//           "id": "prod_9BAmwJAND9leXd",
//           "created": 1655836544,
//           "updated": 1655839321,
//           "active": true,
//           "permalink": "qAui2z",
//           "name": "charger",
//           "description": "<p>mobile charger </p><p>adapter and cable </p>",
//           "price": {
//               "raw": 65,
//               "formatted": "65.00",
//               "formatted_with_symbol": "$65.00",
//               "formatted_with_code": "65.00 USD"
//           },
//           "inventory": {
//               "managed": false,
//               "available": 0
//           },
//           "sku": null,
//           "sort_order": 0,
//           "seo": {
//               "title": null,
//               "description": null
//           },
//           "thank_you_url": null,
//           "meta": null,
//           "conditionals": {
//               "is_active": true,
//               "is_tax_exempt": false,
//               "is_pay_what_you_want": false,
//               "is_inventory_managed": false,
//               "is_sold_out": false,
//               "has_digital_delivery": false,
//               "has_physical_delivery": false,
//               "has_images": true,
//               "collects_fullname": false,
//               "collects_shipping_address": false,
//               "collects_billing_address": false,
//               "collects_extra_fields": false
//           },
//           "is": {
//               "active": true,
//               "tax_exempt": false,
//               "pay_what_you_want": false,
//               "inventory_managed": false,
//               "sold_out": false
//           },
//           "has": {
//               "digital_delivery": false,
//               "physical_delivery": false,
//               "images": true
//           },
//           "collects": {
//               "fullname": false,
//               "shipping_address": false,
//               "billing_address": false,
//               "extra_fields": false
//           },
//           "checkout_url": {
//               "checkout": "https://checkout.chec.io/qAui2z?checkout=true",
//               "display": "https://checkout.chec.io/qAui2z"
//           },
//           "extra_fields": [],
//           "variant_groups": [],
//           "categories": [{
//               "id": "cat_QG375vVYL5rMOg",
//               "slug": "electric",
//               "name": "electric"
//           }],
//           "assets": [{
//               "id": "ast_DWy4oGedJYl6Jx",
//               "url": "https://cdn.chec.io/merchants/43597/assets/U0qrStVwGyL4zg7U|charger-usb-cable-type-c-white-isolated-background_58702-4500.jpeg",
//               "description": null,
//               "is_image": true,
//               "filename": "charger-usb-cable-type-c-white-isolated-background_58702-4500.jpeg",
//               "file_size": 10466,
//               "file_extension": "jpeg",
//               "image_dimensions": {
//                   "width": 740,
//                   "height": 494
//               },
//               "meta": [],
//               "created_at": 1655839313,
//               "updated_at": 1655839317
//           }],
//           "image": {
//               "id": "ast_DWy4oGedJYl6Jx",
//               "url": "https://cdn.chec.io/merchants/43597/assets/U0qrStVwGyL4zg7U|charger-usb-cable-type-c-white-isolated-background_58702-4500.jpeg",
//               "description": null,
//               "is_image": true,
//               "filename": "charger-usb-cable-type-c-white-isolated-background_58702-4500.jpeg",
//               "file_size": 10466,
//               "file_extension": "jpeg",
//               "image_dimensions": {
//                   "width": 740,
//                   "height": 494
//               },
//               "meta": [],
//               "created_at": 1655839313,
//               "updated_at": 1655839317
//           },
//           "related_products": [],
//           "attributes": []
//       },
//       {
//           "id": "prod_mOVKl4aMZ3wprR",
//           "created": 1655836547,
//           "updated": 1655836674,
//           "active": true,
//           "permalink": "pBLWPz",
//           "name": "doorbell",
//           "description": "<p>morden doorbell</p>",
//           "price": {
//               "raw": 65,
//               "formatted": "65.00",
//               "formatted_with_symbol": "$65.00",
//               "formatted_with_code": "65.00 USD"
//           },
//           "inventory": {
//               "managed": false,
//               "available": 0
//           },
//           "sku": null,
//           "sort_order": 0,
//           "seo": {
//               "title": null,
//               "description": null
//           },
//           "thank_you_url": null,
//           "meta": null,
//           "conditionals": {
//               "is_active": true,
//               "is_tax_exempt": false,
//               "is_pay_what_you_want": false,
//               "is_inventory_managed": false,
//               "is_sold_out": false,
//               "has_digital_delivery": false,
//               "has_physical_delivery": false,
//               "has_images": true,
//               "collects_fullname": false,
//               "collects_shipping_address": false,
//               "collects_billing_address": false,
//               "collects_extra_fields": false
//           },
//           "is": {
//               "active": true,
//               "tax_exempt": false,
//               "pay_what_you_want": false,
//               "inventory_managed": false,
//               "sold_out": false
//           },
//           "has": {
//               "digital_delivery": false,
//               "physical_delivery": false,
//               "images": true
//           },
//           "collects": {
//               "fullname": false,
//               "shipping_address": false,
//               "billing_address": false,
//               "extra_fields": false
//           },
//           "checkout_url": {
//               "checkout": "https://checkout.chec.io/pBLWPz?checkout=true",
//               "display": "https://checkout.chec.io/pBLWPz"
//           },
//           "extra_fields": [],
//           "variant_groups": [],
//           "categories": [{
//               "id": "cat_VKXmwDmnQorgDA",
//               "slug": "safety",
//               "name": "safety"
//           }],
//           "assets": [{
//               "id": "ast_zkK6oLMEXR5Xn0",
//               "url": "https://cdn.chec.io/merchants/43597/assets/RGTaVQJlXS5zE8A1|male-courier-with-thermo-bag-box-clipboard-ringing-doorbell-pensive-caucasian-deliveryman-postman-standing-outdoors-holding-parcel-delivering-order-delivery-service-post-concept_74855-11864.jpg",
//               "description": null,
//               "is_image": true,
//               "filename": "male-courier-with-thermo-bag-box-clipboard-ringing-doorbell-pensive-caucasian-deliveryman-postman-standing-outdoors-holding-parcel-delivering-order-delivery-service-post-concept_74855-11864.jpg",
//               "file_size": 74401,
//               "file_extension": "jpg",
//               "image_dimensions": {
//                   "width": 740,
//                   "height": 493
//               },
//               "meta": [],
//               "created_at": 1655836666,
//               "updated_at": 1655836670
//           }],
//           "image": {
//               "id": "ast_zkK6oLMEXR5Xn0",
//               "url": "https://cdn.chec.io/merchants/43597/assets/RGTaVQJlXS5zE8A1|male-courier-with-thermo-bag-box-clipboard-ringing-doorbell-pensive-caucasian-deliveryman-postman-standing-outdoors-holding-parcel-delivering-order-delivery-service-post-concept_74855-11864.jpg",
//               "description": null,
//               "is_image": true,
//               "filename": "male-courier-with-thermo-bag-box-clipboard-ringing-doorbell-pensive-caucasian-deliveryman-postman-standing-outdoors-holding-parcel-delivering-order-delivery-service-post-concept_74855-11864.jpg",
//               "file_size": 74401,
//               "file_extension": "jpg",
//               "image_dimensions": {
//                   "width": 740,
//                   "height": 493
//               },
//               "meta": [],
//               "created_at": 1655836666,
//               "updated_at": 1655836670
//           },
//           "related_products": [],
//           "attributes": []
//       }
//   ],
//   "meta": {
//       "pagination": {
//           "total": 11,
//           "count": 11,
//           "per_page": 20,
//           "current_page": 1,
//           "total_pages": 1,
//           "links": {}
//       }
//   }
// };

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProduct = async () => {
    const data = await commerce.products.list();

    //   setProducts(data.data)
    setProducts((data && data.data) || []);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  const handelRefresh = async () => {
    const newCart = await commerce.cart.refresh();
    console.log("yes this is cart" + cart);

    setCart(newCart);
  };

  const handelAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };
  const handelUpdateCartQuant = async (productId, quantity) => {
    const item = await commerce.cart.update(productId, { quantity });

    setCart(item.cart);
  };
  const handelRemovefromCart = async (productId) => {
    const item = await commerce.cart.remove(productId);

    setCart(item.cart);
  };

  const handelEmptyCart = async () => {
    const item = await commerce.cart.empty();

    setCart(item.cart);
  };

  useEffect(() => {
    fetchProduct();
    fetchCart();
    console.log("refreshing");
  }, []);

  console.log(products);
  console.log(cart);
  //console.log(cart.total_items)

  return (
    <div>
      <CssBaseline/>
      {/* */}
      <Navbar totalItem={cart.total_items ? cart.total_items : 0}  />

      <Routes>
        <Route
          path="/"
          element={
            <Products products={products} onAddToCart={handelAddToCart}  />
          }
        />
        <Route
          path="/ecomwebapp"
          element={
            <Products products={products} onAddToCart={handelAddToCart} />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              handelUpdateCartQuant={handelUpdateCartQuant}
              handelRemovefromCart={handelRemovefromCart}
              handelEmptyCart={handelEmptyCart}
              handelRefresh={handelRefresh}
            />
          }
        />
        <Route path="/checkout" element={<Checkout cart={cart}  handelRefresh={handelRefresh} />} />
      </Routes>
      <div className="bottom">

      </div>
    </div>
  );
}

export default App;
