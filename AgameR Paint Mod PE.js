1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
178
179
180
181
182
183
184
185
186
187
188
189
190
191
192
193
194
195
196
197
198
199
200
201
202
203
204
205
206
207
208
209
210
211
212
213
214
215
216
217
218
219
220
221
222
223
224
225
226
227
228
229
230
231
232
233
234
235
236
237
238
239
240
241
242
243
244
245
246
247
248
249
250
251
252
253
254
255
256
257
258
259
260
261
262
263
264
265
266
267
268
269
270
271
272
273
274
275
276
277
278
279
280
281
282
283
284
285
286
287
288
289
290
291
292
293
294
295
296
297
298
299
300
301
302
303
304
305
306
307
308
309
310
311
312
313
314
315
316
317
318
319
320
321
322
323
324
325
326
327
328
329
330
331
332
333
334
335
336
337
338
339
340
341
342
343
344
345
346
347
348
349
350
351
352
353
354
355
356
357
358
359
360
361
362
363
364
365
366
367
368
369
370
371
372
373
374
375
376
377
378
379
380
381
382
383
384
385
386
387
388
389
390
391
392
393
394
395
396
397
398
399
400
401
402
403
404
405
406
407
408
409
410
411
412
413
414
415
416
417
418
419
420
421
422
423
424
425
426
427
428
429
430
431
432
433
434
435
436
437
438
439
440
441
442
443
444
445
446
447
448
449
450
451
452
453
454
455
456
457
458
459
460
461
462
463
464
465
466
467
468
469
470
471
472
473
474
475
476
477
478
479
480
481
482
483
484
485
486
487
488
489
490
491
492
493
494
495
496
497
498
499
500
501
502
503
504
505
506
507
508
509
510
511
512
513
514
515
516
517
518
519
520
521
522
523
524
525
526
527
528
529
530
531
532
533
534
535
536
537
538
539
540
541
542
543
544
545
546
547
548
549
550
551
552
553
554
555
556
557
558
559
560
561
562
563
564
565
566
567
568
569
570
571
572
573
574
575
576
577
578
579
580
581
582
583
584
585
586
587
588
589
590
591
592
593
594
595
596
597
598
599
600
601
602
603
604
605
606
607
608
609
610
611
612
613
614
615
616
617
618
619
620
621
622
623
624
625
626
627
628
629
630
631
632
633
634
635
636
637
638
639
640
641
642
643
644
645
646
647
648
649
650
651
652
653
654
655
656
657
658
659
660
661
662
663
664
665
666
667
668
669
670
671
672
673
674
675
676
677
678
679
680
681
682
683
684
685
686
687
688
689
690
691
692
693
694
695
696
697
698
699
700
701
702
703
704
705
706
707
708
709
710
711
712
713
714
715
716
717
718
719
720
721
722
723
724
725
726
727
728
729
730
731
732
733
734
735
736
737
738
739
740
741
742
743
744
745
746
747
748
749
750
751
752
753
754
755
756
757
758
759
760
761
762
763
764
765
766
767
768
769
770
771
772
773
774
775
776
777
778
779
780
781
782
783
784
785
786
787
788
789
790
791
792
ModPE.overrideTexture("images/mob/white.png","http://i.imgur.com/OnAoGUC.png");
ModPE.overrideTexture("images/mob/orange.png","http://i.imgur.com/vYmuP0R.png");
ModPE.overrideTexture("images/mob/magenta.png","http://i.imgur.com/0xNF7Tq.png");
ModPE.overrideTexture("images/mob/lightblue.png","http://i.imgur.com/ctgWh7b.png");
ModPE.overrideTexture("images/mob/yellow.png","http://i.imgur.com/79fJGKx.png");
ModPE.overrideTexture("images/mob/limegreen.png","http://i.imgur.com/Ttb33ro.png");
ModPE.overrideTexture("images/mob/pink.png","http://i.imgur.com/NlWZwei.png");
ModPE.overrideTexture("images/mob/gray.png","http://i.imgur.com/mBQr0Ol.png");
ModPE.overrideTexture("images/mob/lightgray.png","http://i.imgur.com/448b8QN.png");
ModPE.overrideTexture("images/mob/cyan.png","http://i.imgur.com/yb9eOy7.png");
ModPE.overrideTexture("images/mob/purple.png","http://i.imgur.com/ytbBxTn.png");
ModPE.overrideTexture("images/mob/blue.png","http://i.imgur.com/ks9GRBp.png");
ModPE.overrideTexture("images/mob/brown.png","http://i.imgur.com/eFdiDWr.png");
ModPE.overrideTexture("images/mob/green.png","http://i.imgur.com/s4W0IuF.png");
ModPE.overrideTexture("images/mob/red.png","http://i.imgur.com/lqQJYW3.png");
ModPE.overrideTexture("images/mob/black.png","http://i.imgur.com/j2y5JxL.png");
 
ModPE.setItem(437,"quiver",0,"Paint Brush",64);
ModPE.setItem(394,"repeater",0,"White Paint Brush",64);
ModPE.setItem(510,"iron_horse_armor",0,"Orange Paint Brush",64);
ModPE.setItem(511,"gold_horse_armor",0,"Magenta Paint Brush",64);
ModPE.setItem(509,"minecart_furnace",0,"Light Blue Paint Brush",64);
ModPE.setItem(508,"minecart_hopper",0,"Yellow Paint Brush",64);
ModPE.setItem(507,"minecart_chest",0,"Lime Green Paint Brush",64);
ModPE.setItem(401,"brewing_stand",0,"Pink Paint Brush",64);
ModPE.setItem(402,"book_writable",0,"Gray Paint Brush",64);
ModPE.setItem(403,"book_enchanted",0,"Light Gray Paint Brush",64);
ModPE.setItem(395,"diamond_horse_armor",0,"Cyan Paint Brush",64);
ModPE.setItem(396,"fishing_rod_cast",0,"Purple Paint Brush",64);
ModPE.setItem(397,"minecart_tnt",0,"Blue Paint Brush",64);
ModPE.setItem(410,"hopper",0,"Brown Paint Brush",64);
ModPE.setItem(399,"fishing_rod_uncast",0,"Green Paint Brush",64);
ModPE.setItem(322,"book_written",0,"Red Paint Brush",64);
ModPE.setItem(326,"comparator",0,"Black Paint Brush",64);
 
Item.setMaxDamage(437, 10);
Item.setMaxDamage(394, 10);
Item.setMaxDamage(510, 10);
Item.setMaxDamage(511, 10);
Item.setMaxDamage(509, 10);
Item.setMaxDamage(508, 10);
Item.setMaxDamage(507, 10);
Item.setMaxDamage(401, 10);
Item.setMaxDamage(402, 10);
Item.setMaxDamage(403, 10);
Item.setMaxDamage(395, 10);
Item.setMaxDamage(396, 10);
Item.setMaxDamage(397, 10);
Item.setMaxDamage(410, 10);
Item.setMaxDamage(399, 10);
Item.setMaxDamage(322, 10);
Item.setMaxDamage(326, 10);
 
Player.addItemCreativeInv(437,1,0);
Player.addItemCreativeInv(394,1,0);
Player.addItemCreativeInv(510,1,0);
Player.addItemCreativeInv(511,1,0);
Player.addItemCreativeInv(509,1,0);
Player.addItemCreativeInv(508,1,0);
Player.addItemCreativeInv(507,1,0);
Player.addItemCreativeInv(401,1,0);
Player.addItemCreativeInv(402,1,0);
Player.addItemCreativeInv(403,1,0);
Player.addItemCreativeInv(395,1,0);
Player.addItemCreativeInv(396,1,0);
Player.addItemCreativeInv(397,1,0);
Player.addItemCreativeInv(410,1,0);
Player.addItemCreativeInv(399,1,0);
Player.addItemCreativeInv(322,1,0);
Player.addItemCreativeInv(326,1,0);
 
Item.addShapedRecipe(437, 1, 0, [
"   ",
"   ",
" t "
], 
["t", 280, 0]);
 
Item.addShapedRecipe(394, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 15, "t", 437, 0]);
 
Item.addShapedRecipe(510, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 14, "t", 437, 0]); 
 
Item.addShapedRecipe(511, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 13, "t", 437, 0]); 
 
Item.addShapedRecipe(509, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 12, "t", 437, 0]); 
 
Item.addShapedRecipe(508, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 11, "t", 437, 0]); 
 
Item.addShapedRecipe(507, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 10, "t", 437, 0]); 
 
Item.addShapedRecipe(401, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 9, "t", 437, 0]); 
 
Item.addShapedRecipe(402, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 8, "t", 437, 0]); 
 
Item.addShapedRecipe(403, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 7, "t", 437, 0]); 
 
Item.addShapedRecipe(395, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 6, "t", 437, 0]); 
 
Item.addShapedRecipe(396, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 5, "t", 437, 0]); 
 
Item.addShapedRecipe(397, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 4, "t", 437, 0]); 
 
Item.addShapedRecipe(410, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 3, "t", 437, 0]); 
 
Item.addShapedRecipe(399, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 2, "t", 437, 0]); 
 
Item.addShapedRecipe(322, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 1, "t", 437, 0]); 
 
Item.addShapedRecipe(326, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 0, "t", 437, 0]);
 
var GUI;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
 
function newLevel() {
   /*ctx.runOnUiThread(new java.lang.Runnable(){
    
    
                     run: function(){
         
        try{
         
           GUI = new android.widget.PopupWindow();
           var layout = new android.widget.LinearLayout(ctx);
           var btn = new android.widget.Button(ctx);
            
           layout.setOrientation(android.widget.LinearLayout.VERTICAL);
           layout.addView(btn);
            
            
           GUI.setContentView(layout);
           GUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
           GUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
           GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.LEFT, 0, 0);
            
           btn.setText("[?]");
           btn.setOnClickListener(new android.view.View.OnClickListener(){
            
                                  onClick: function(p1){
                                   
             var builder = new android.app.AlertDialog.Builder(ctx);
             builder.setMessage("You're using a beta build of AgameR Paint Mod PE. Please report bugs.");
             builder.setNegativeButton("Ok", new android.content.DialogInterface.OnClickListener(){
              
                                        onClick: function(p1, p2){
                                         
                p1.cancel();                
                                         
                                         
            }                           
              
            });
                                         
        var dialog = builder.create();
        dialog.show();
             
            }
                                   
                                  });
         
        }
        catch(err){
         
           print("Error: " + err)
         
        }
}
                     });
 
    */clientMessage(ChatColor.GREEN+"AgameR Paint Mod PE"+ChatColor.RED+" 1.3 "+ChatColor.WHITE+"by peacestorm initialized");
};
 
function modTick() {
//ModPE.showTipMessage("AgameR Paint Mod PE 1.3 Build X");
};
 
function procCmd(cmd) {
    cmd = cmd.toLowerCase();
    if (cmd == "changelog paintmodpe"){
        clientMessage("AgameR Paint Mod PE Changelog - 1.0: Initial release | 1.1: Added crafting recipes | 1.2: Paint any block you want, fixed item id conflict with the TooManyItems addon, added a new crafting recipe for the white paint brush | 1.2.1: Used paintbrushes will now turn into empty paintbrushes in survival; Added an easter egg | 1.2.2: Removed survival functionalities introduced in 1.2.1 due to crashes; Fixed some things | 1.2.3: Added a new and improved survival system; Fixed bugs | 1.3: Added carpet painting; Some improvements");
    }
};
 
function attackHook(attacker, victim) {
    var selecteditem = Player.getCarriedItem();
    var gamemode = Level.getGameMode()
    if (attacker == Player.getEntity()) {
        if (selecteditem == 394) {
            Entity.setMobSkin(victim,"mob/white.png");
            Entity.setHealth(victim,Entity.getHealth(victim) + 1);
            if(gamemode == 0){
            Entity.setCarriedItem(attacker, 394, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
            if(Player.getCarriedItemData() > 10){
            Entity.setCarriedItem(attacker, 394, Player.getCarriedItemCount() - 1);
            Player.addItemInventory(437,1,0);
        }}}else if (selecteditem == 510) {
            Entity.setMobSkin(victim,"mob/orange.png");
            Entity.setHealth(victim,Entity.getHealth(victim) + 1);
            if(gamemode == 0){
            Entity.setCarriedItem(attacker, 510, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
            if(Player.getCarriedItemData() > 10){
            Entity.setCarriedItem(attacker, 510, Player.getCarriedItemCount() - 1);
            Player.addItemInventory(437,1,0);
        }}}else if (selecteditem == 511) {
            Entity.setMobSkin(victim,"mob/magenta.png");
            Entity.setHealth(victim,Entity.getHealth(victim) + 1);
            if(gamemode == 0){
            Entity.setCarriedItem(attacker, 511, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
            if(Player.getCarriedItemData() > 10){
            Entity.setCarriedItem(attacker, 511, Player.getCarriedItemCount() - 1);
            Player.addItemInventory(437,1,0);
        }}}else if (selecteditem == 509) {
            Entity.setMobSkin(victim,"mob/lightblue.png");
            Entity.setHealth(victim,Entity.getHealth(victim) + 1);
            if(gamemode == 0){
            Entity.setCarriedItem(attacker, 509, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
            if(Player.getCarriedItemData() > 10){
            Entity.setCarriedItem(attacker, 509, Player.getCarriedItemCount() - 1);
            Player.addItemInventory(437,1,0);
        }}}else if (selecteditem == 508) {
            Entity.setMobSkin(victim,"mob/yellow.png");
            Entity.setHealth(victim,Entity.getHealth(victim) + 1);
            if(gamemode == 0){
            Entity.setCarriedItem(attacker, 508, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
            if(Player.getCarriedItemData() > 10){
            Entity.setCarriedItem(attacker, 508, Player.getCarriedItemCount() - 1);
            Player.addItemInventory(437,1,0);
        }}}else if (selecteditem == 507) {
            Entity.setMobSkin(victim,"mob/limegreen.png");
            Entity.setHealth(victim,Entity.getHealth(victim) + 1);
            if(gamemode == 0){
            Entity.setCarriedItem(attacker, 507, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
            if(Player.getCarriedItemData() > 10){
            Entity.setCarriedItem(attacker, 507, Player.getCarriedItemCount() - 1);
            Player.addItemInventory(437,1,0);
        }}}else if (selecteditem == 401) {
            Entity.setMobSkin(victim,"mob/pink.png");
            Entity.setHealth(victim,Entity.getHealth(victim) + 1);
            if(gamemode == 0){
            Entity.setCarriedItem(attacker, 401, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
            if(Player.getCarriedItemData() > 10){
            Entity.setCarriedItem(attacker, 401, Player.getCarriedItemCount() - 1);
            Player.addItemInventory(437,1,0);
        }}}else if (selecteditem == 402) {
            Entity.setMobSkin(victim,"mob/gray.png");
            Entity.setHealth(victim,Entity.getHealth(victim) + 1);
            if(gamemode == 0){
            Entity.setCarriedItem(attacker, 402, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
            if(Player.getCarriedItemData() > 10){
            Entity.setCarriedItem(attacker, 402, Player.getCarriedItemCount() - 1);
            Player.addItemInventory(437,1,0);
        }}}else if (selecteditem == 403) {
            Entity.setMobSkin(victim,"mob/lightgray.png");
            Entity.setHealth(victim,Entity.getHealth(victim) + 1);
            if(gamemode == 0){
            Entity.setCarriedItem(attacker, 403, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
            if(Player.getCarriedItemData() > 10){
            Entity.setCarriedItem(attacker, 403, Player.getCarriedItemCount() - 1);
            Player.addItemInventory(437,1,0);
        }}}else if (selecteditem == 395) {
            Entity.setMobSkin(victim,"mob/cyan.png");
            Entity.setHealth(victim,Entity.getHealth(victim) + 1);
            if(gamemode == 0){
            Entity.setCarriedItem(attacker, 395, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
            if(Player.getCarriedItemData() > 10){
            Entity.setCarriedItem(attacker, 395, Player.getCarriedItemCount() - 1);
            Player.addItemInventory(437,1,0);
        }}}else if (selecteditem == 396) {
            Entity.setMobSkin(victim,"mob/purple.png");
            Entity.setHealth(victim,Entity.getHealth(victim) + 1);
            if(gamemode == 0){
            Entity.setCarriedItem(attacker, 396, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
            if(Player.getCarriedItemData() > 10){
            Entity.setCarriedItem(attacker, 396, Player.getCarriedItemCount() - 1);
            Player.addItemInventory(437,1,0);
        }}}else if (selecteditem == 397) {
            Entity.setMobSkin(victim,"mob/blue.png");
            Entity.setHealth(victim,Entity.getHealth(victim) + 1);
            if(gamemode == 0){
            Entity.setCarriedItem(attacker, 397, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
            if(Player.getCarriedItemData() > 10){
            Entity.setCarriedItem(attacker, 397, Player.getCarriedItemCount() - 1);
            Player.addItemInventory(437,1,0);
        }}}else if (selecteditem == 410) {
            Entity.setMobSkin(victim,"mob/brown.png");
            Entity.setHealth(victim,Entity.getHealth(victim) + 1);
            if(gamemode == 0){
            Entity.setCarriedItem(attacker, 410, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
            if(Player.getCarriedItemData() > 10){
            Entity.setCarriedItem(attacker, 410, Player.getCarriedItemCount() - 1);
            Player.addItemInventory(437,1,0);
        }}}else if (selecteditem == 399) {
            Entity.setMobSkin(victim,"mob/green.png");
            Entity.setHealth(victim,Entity.getHealth(victim) + 1);
            if(gamemode == 0){
            Entity.setCarriedItem(attacker, 399, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
            if(Player.getCarriedItemData() > 10){
            Entity.setCarriedItem(attacker, 399, Player.getCarriedItemCount() - 1);
            Player.addItemInventory(437,1,0);
        }}}else if (selecteditem == 322) {
            Entity.setMobSkin(victim,"mob/red.png");
            Entity.setHealth(victim,Entity.getHealth(victim) + 1);
            if(gamemode == 0){
            Entity.setCarriedItem(attacker, 322, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
            if(Player.getCarriedItemData() > 10){
            Entity.setCarriedItem(attacker, 322, Player.getCarriedItemCount() - 1);
            Player.addItemInventory(437,1,0);
        }}}else if (selecteditem == 326) {
            Entity.setMobSkin(victim,"mob/black.png");
            Entity.setHealth(victim,Entity.getHealth(victim) + 1);
            if(gamemode == 0){
            Entity.setCarriedItem(attacker, 326, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
            if(Player.getCarriedItemData() > 10){
            Entity.setCarriedItem(attacker, 326, Player.getCarriedItemCount() - 1);
            Player.addItemInventory(437,1,0);
    }}}}};
 
function useItem(x,y,z,i,b) {
var gamemode = Level.getGameMode();
if(i == 394) {
if(b == 35) {
Level.setTile(x,y,z,35,0);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 394, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 394, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,0)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 394, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 394, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,0)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 394, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 394, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
 
}}}}else if(i == 510) {
if(b == 35) {
Level.setTile(x,y,z,35,1);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 510, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 510, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,1)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 510, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 510, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,1)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 510, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 510, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
 
}}}}else if(i == 511) {
if(b == 35) {
Level.setTile(x,y,z,35,2);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 511, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 511, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,2)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 511, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 511, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,2)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 511, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 511, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
 
}}}}else if(i == 509) {
if(b == 35) {
Level.setTile(x,y,z,35,3);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 509, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 509, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,3)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 509, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 509, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,3)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 509, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 509, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
 
}}}}else if(i == 508) {
if(b == 35) {
Level.setTile(x,y,z,35,4);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 508, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 508, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,4)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 508, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 508, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,4)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 508, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 508, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
 
}}}}else if(i == 507) {
if(b == 35) {
Level.setTile(x,y,z,35,5);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 507, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 507, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,5)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 507, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 507, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,5)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 507, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 507, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
 
}}}}else if(i == 401) {
if(b == 35) {
Level.setTile(x,y,z,35,6);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 401, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 401, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,6)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 401, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 401, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,6)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 401, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 401, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
 
}}}}else if(i == 402) {
if(b == 35) {
Level.setTile(x,y,z,35,7);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 402, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 402, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,7)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 402, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 402, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,7)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 402, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 402, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
 
}}}}else if(i == 403) {
if(b == 35) {
Level.setTile(x,y,z,35,8);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 403, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 403, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,8)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 403, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 403, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,8)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 403, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 403, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
 
}}}}else if(i == 395) {
if(b == 35) {
Level.setTile(x,y,z,35,9);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 395, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 395, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,9)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 395, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 395, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,9)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 395, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 395, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
 
}}}}else if(i == 396) {
if(b == 35) {
Level.setTile(x,y,z,35,10);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 396, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 396, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,10)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 396, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 396, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,10)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 396, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 396, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
 
}}}}else if(i == 397) {
if(b == 35) {
Level.setTile(x,y,z,35,11);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 397, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 397, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,11)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 397, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 397, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,11)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 397, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 397, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
 
}}}}else if(i == 410) {
if(b == 35) {
Level.setTile(x,y,z,35,12);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 410, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 410, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,12)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 410, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 410, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,12)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 410, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 410, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
 
}}}}else if(i == 399) {
if(b == 35) {
Level.setTile(x,y,z,35,13);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 399, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 399, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,13)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 399, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 399, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,13)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 399, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 399, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
 
}}}}else if(i == 322) {
if(b == 35) {
Level.setTile(x,y,z,35,14);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 322, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 322, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,14)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 322, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 322, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,14)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 322, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 322, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
 
}}}}else if(i == 326) {
if(b == 35) {
Level.setTile(x,y,z,35,15);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 326, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 326, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,15)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 326, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 326, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,15)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 326, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 326, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}}};
 
//*Copyright*
//-------------
//You may:
//Edit this mod for personal use
//Create a review of this mod
//
//You may NOT:
//Distribute this mod without permission of peacestorm
//Claim that this mod is yours
//Include this mod in your modpack without permission
//Use code of this mod in your own mod without permission
//Monetize this mod by using AdFly or any other monetizing method
 
//*Credits*
//-----------
//Creator: peacestorm
 
//*Mod info*
//------------
//Mod version: 1.3
//For full changelog, do /changelog paintmodpe
 
//*Ideas*
//---------
//If you have any ideas for this mod, please send them to my MC-Forum account, or on Twitter: @AgameR_Modder
