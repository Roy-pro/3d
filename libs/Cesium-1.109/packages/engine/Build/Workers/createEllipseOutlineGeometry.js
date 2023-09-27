/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.109
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import {
  EllipseOutlineGeometry_default
} from "./chunk-NRETMGYL.js";
import "./chunk-H6MBQ4W4.js";
import "./chunk-A6EA6KIE.js";
import "./chunk-TF5D2H7B.js";
import "./chunk-N5MMDSD2.js";
import "./chunk-UGZGTV5K.js";
import "./chunk-5U4UHRZ2.js";
import "./chunk-FE2XG3SS.js";
import "./chunk-PW5CA4MJ.js";
import "./chunk-KAFF2QX3.js";
import {
  Cartesian3_default,
  Ellipsoid_default
} from "./chunk-XJCTFTBM.js";
import "./chunk-PWDYKCNC.js";
import "./chunk-527JG4D7.js";
import "./chunk-FVDTKX3F.js";
import "./chunk-BT6YIL2N.js";
import "./chunk-UN7AK64D.js";
import {
  defined_default
} from "./chunk-QVJ6IRKV.js";

// packages/engine/Source/Workers/createEllipseOutlineGeometry.js
function createEllipseOutlineGeometry(ellipseGeometry, offset) {
  if (defined_default(offset)) {
    ellipseGeometry = EllipseOutlineGeometry_default.unpack(ellipseGeometry, offset);
  }
  ellipseGeometry._center = Cartesian3_default.clone(ellipseGeometry._center);
  ellipseGeometry._ellipsoid = Ellipsoid_default.clone(ellipseGeometry._ellipsoid);
  return EllipseOutlineGeometry_default.createGeometry(ellipseGeometry);
}
var createEllipseOutlineGeometry_default = createEllipseOutlineGeometry;
export {
  createEllipseOutlineGeometry_default as default
};
