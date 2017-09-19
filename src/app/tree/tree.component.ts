import {Component, OnInit, ViewChild} from '@angular/core';
import {beforeUrl, pageAnimation} from '../common/public-data';
import {Tree, TreeNode} from 'primeng/primeng';
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

  constructor() {
  }

  ngOnInit() {
  }

  files4: TreeNode[] = [
    {
      'data': {
        'name': 'Documents',
        'size': '75kb',
        'type': 'Folder'
      },
      'children': [
        {
          'data': {
            'name': 'Work',
            'size': '55kb',
            'type': 'Folder'
          },
          'children': [
            {
              'data': {
                'name': 'Expenses.doc',
                'size': '30kb',
                'type': 'Document'
              }
            },
            {
              'data': {
                'name': 'Resume.doc',
                'size': '25kb',
                'type': 'Resume'
              }
            }
          ]
        },
        {
          'data': {
            'name': 'Home',
            'size': '20kb',
            'type': 'Folder'
          },
          'children': [
            {
              'data': {
                'name': 'Invoices',
                'size': '20kb',
                'type': 'Text'
              }
            }
          ]
        }
      ]
    },
    {
      'data': {
        'name': 'Pictures',
        'size': '150kb',
        'type': 'Folder'
      },
      'children': [
        {
          'data': {
            'name': 'barcelona.jpg',
            'size': '90kb',
            'type': 'Picture'
          }
        },
        {
          'data': {
            'name': 'primeui.png',
            'size': '30kb',
            'type': 'Picture'
          }
        },
        {
          'data': {
            'name': 'optimus.jpg',
            'size': '30kb',
            'type': 'Picture'
          }
        }
      ]
    }
  ];
  selectedFiles2: TreeNode;
  msgs: Message[] = [];                                  //消息
  filesTree0: TreeNode[] = [
    {
      'label': 'Documents',
      'data': 'Documents Folder',
      'expandedIcon': 'fa-folder-open',
      'collapsedIcon': 'fa-folder',
      'children': [{
        'label': 'Work',
        'data': 'Work Folder',
        'expandedIcon': 'fa-folder-open',
        'collapsedIcon': 'fa-folder',
        'children': [{
          'label': 'Expenses.doc',
          'icon': 'fa-file-word-o',
          'data': 'Expenses Document'
        }, {'label': 'Resume.doc', 'icon': 'fa-file-word-o', 'data': 'Resume Document'}]
      },
        {
          'label': 'Home',
          'data': 'Home Folder',
          'expandedIcon': 'fa-folder-open',
          'collapsedIcon': 'fa-folder',
          'children': [{'label': 'Invoices.txt', 'icon': 'fa-file-word-o', 'data': 'Invoices for this month'}]
        }]
    },
    {
      'label': 'Pictures',
      'data': 'Pictures Folder',
      'expandedIcon': 'fa-folder-open',
      'collapsedIcon': 'fa-folder',
      'children': [
        {'label': 'barcelona.jpg', 'icon': 'fa-file-image-o', 'data': 'Barcelona Photo'},
        {'label': 'logo.jpg', 'icon': 'fa-file-image-o', 'data': 'PrimeFaces Logo'},
        {'label': 'primeui.png', 'icon': 'fa-file-image-o', 'data': 'PrimeUI Logo'}]
    },
    {
      'label': 'Movies',
      'data': 'Movies Folder',
      'expandedIcon': 'fa-folder-open',
      'collapsedIcon': 'fa-folder',
      'children': [{
        'label': 'Al Pacino',
        'data': 'Pacino Movies',
        'children': [{'label': 'Scarface', 'icon': 'fa-file-video-o', 'data': 'Scarface Movie'}, {
          'label': 'Serpico',
          'icon': 'fa-file-video-o',
          'data': 'Serpico Movie'
        }]
      },
        {
          'label': 'Robert De Niro',
          'data': 'De Niro Movies',
          'children': [{
            'label': 'Goodfellas',
            'icon': 'fa-file-video-o',
            'data': 'Goodfellas Movie'
          }, {'label': 'Untouchables', 'icon': 'fa-file-video-o', 'data': 'Untouchables Movie'}]
        }]
    }
  ];
  @ViewChild('expandingTree')
  expandingTree: Tree;
}
