import { Component, OnInit } from '@angular/core';
import {beforeUrl, pageAnimation} from "../common/public-data";
import {TreeNode} from 'primeng/primeng';
import {Message} from '../common/car';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
  animations: [
    pageAnimation
  ]
})
export class TreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  files4: TreeNode[]=[
    {
      "data":{
        "name":"Documents",
        "size":"75kb",
        "type":"Folder"
      },
      "children":[
        {
          "data":{
            "name":"Work",
            "size":"55kb",
            "type":"Folder"
          },
          "children":[
            {
              "data":{
                "name":"Expenses.doc",
                "size":"30kb",
                "type":"Document"
              }
            },
            {
              "data":{
                "name":"Resume.doc",
                "size":"25kb",
                "type":"Resume"
              }
            }
          ]
        },
        {
          "data":{
            "name":"Home",
            "size":"20kb",
            "type":"Folder"
          },
          "children":[
            {
              "data":{
                "name":"Invoices",
                "size":"20kb",
                "type":"Text"
              }
            }
          ]
        }
      ]
    },
    {
      "data":{
        "name":"Pictures",
        "size":"150kb",
        "type":"Folder"
      },
      "children":[
        {
          "data":{
            "name":"barcelona.jpg",
            "size":"90kb",
            "type":"Picture"
          }
        },
        {
          "data":{
            "name":"primeui.png",
            "size":"30kb",
            "type":"Picture"
          }
        },
        {
          "data":{
            "name":"optimus.jpg",
            "size":"30kb",
            "type":"Picture"
          }
        }
      ]
    }
  ];
  selectedFiles2: TreeNode;
  msgs: Message[] = [];                                  //消息
}
