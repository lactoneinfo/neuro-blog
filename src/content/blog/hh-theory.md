---
title: "HH方程式の数学的基礎"
description: "神経細胞の電気活動を記述する Hodgkin–Huxley 方程式の導出と直感的解説"
category: "理論"
series: "HH方程式シリーズ"
seriesOrder: 1
tags: ["数学", "HH方程式"]
pubDate: 2025-04-17
---

これはインライン数式：$e^{i\pi}+1=0$ です。

ブロック数式は
$$
C\frac{dV}{dt} = -g_{Na}m^3h(V-E_{Na}) - \dots + I_{ext}
$$
のように書きます。


HH方程式とは、神経細胞の電気活動を記述するための以下の微分方程式系です。

$$
C \frac{dV}{dt} = -g_{Na} m^3 h (V - E_{Na}) - g_{K} n^4 (V - E_{K}) - g_{L}(V - E_{L}) + I_{ext}
$$

...(解説を続ける)
