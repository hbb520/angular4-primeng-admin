import {EventEmitter} from '@angular/core';

/**
 *数据类型
 */
export interface Car {
  name?: string;
  deleted?: boolean;
  createTime?: any;
  modifyTime?: any;
  unitId?: number;
  children?: any;
  description?: string;
  descriptionRelated?: string;
  gbReference?: string;
  gbDescription?: string;
  url?: string;
  categoryName?: string;
  unitName?: string;
  id?: number;
  image?: string;
  pageNo?: number;
  status?: any;
  _body?: any;
  ids?: any;
  label?: any;
  value?: any;
  categoryId?: number;
  specificationsId?: number;
  data?: Data[];
  totalPage?: any;
  totalCount?: any;
  attributeCategoryName?: any
  attributeId?: any
  attributeName?: any
  indicatorName?: any
  materialExample?: any
  spaceAttributeRelationModels?: any
  specificationId?: number
  materialName?: string
  name1?: string
  name2?: string
  name3?: string
  name4?: string
  materialMeasurementRelationModelList?: any
  materialIndicatorRelationModelList?: any
  materialLevelRelationModelList?: any
  measurementId?: any
  attributeManageName?: any
  indicatorId?: any
  addModelmaterialcategoriesAlls?: any
  addModelindicatormanagesAlls?: any
  username?: string
  realname?: string
  roleId?: number
  industryId?: any
  passwrod?: any
  
}
/**
 *数据类型 this.cars.data
 */
export interface Data {
  name?: string;
  id?: number;
  deleted?: boolean;
  createTime?: any;
  modifyTime?: any;
  unitId?: number;
  description?: string;
  url?: string;
  categoryName?: string;
  unitName?: string;
  categoryId?: number;
  specificationsId?: number;
  gbReference?: any;
  gbDescription?: any;
  descriptionRelated?: any;
  creatorId?: any
  industryId?: any
  logo?: any
  thumb?: any
}

/**
 *  引用 primeng common api.ts
 */
export interface MenuItem {
  label?: string;
  icon?: string;
  command?: (event?: any) => void;
  url?: string;
  routerLink?: any;
  eventEmitter?: EventEmitter<any>;
  items?: MenuItem[];
  expanded?: boolean;
  disabled?: boolean;
  visible?: boolean;
  target?: string;
}
export interface Message {
  severity?: string;
  summary?: string;
  detail?: string;
  id?: any;
}

export interface SelectItem {
  label: string;
  value: any;
}

/**
 *引用 primeng common api.ts   end
 */
